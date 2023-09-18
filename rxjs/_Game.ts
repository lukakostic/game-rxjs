import { fromEvent, interval, asyncScheduler, Timestamp, Observable, Subject } from 'rxjs';
import { filter, map, tap,  timestamp, pairwise } from 'rxjs/operators';
import InputManager from './_InputManager';
import {Vector} from './Vector';
import Player from './_Player';
import Enemy from './_Enemy';
import Bullet from './Bullet';
import { makeGameEvents, sub } from './__GameLogic';

interface GameObject {
  enabled: boolean;
  collider: boolean;
  position: { x: number, y: number };
  size: { x: number, y: number };
  centered: boolean;
}

export function getViewportSize(): Vector {
  return { x: window.innerWidth, y: window.innerHeight };
}

export function getViewportCenter(): Vector {
  let size = getViewportSize();
  size.x /= 2;
  size.y /= 2 ;
  return size;
}


export class Game {
    static reset$ = new Subject();
    
    static player : Player|null = null;
    static canvas: HTMLElement | null = null;
    static Input: InputManager | null = null;
    static ticks$: Observable<number> | null = null;
    static cameraOffset = {x:-250,y:-250};
    static cameraPos = {x:0,y:0};
    static sceneExtents = {y:-250,x:-250,xSize:500,ySize:500};
    static gameObjects: GameObject[] = [];
    static paused = false;
    static deltaTime = 0;
    static timeScale = 1.0;
    static collisionPairs: GameObject[][] = []; //cached last CollisionCheck
    static viewportCenter = getViewportCenter();
    static score = 0;
    static events;
    static _gameEvents = null;
    static curLevel = 1;

    constructor(){
        Game.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        

        Game.Input = new InputManager();

        Game.ticks$ = interval(0).pipe(  ////// ******
          timestamp(),pairwise(),  ////// ******
            map(([previous, current]) => {
              (Game.deltaTime = (current.timestamp - previous.timestamp)*Game.timeScale)
              if(Game.deltaTime>10) Game.deltaTime = 10;
              return Game.deltaTime;
            }),
            //da imamo deltaTime izmedju emissija
            tap( () => Game.Input?.tick() ),

            filter(() => !Game.paused),
        );

        window.addEventListener('resize', () => {
          console.log('resize ',getViewportCenter());
          Game.viewportCenter = getViewportCenter();

        });
      Game.events = new Subject();
      Game.curLevel = 1;
    }

    static reset(){
      Game.reset$.next(1);
      Game.score = 0;

      Enemy.enemies.forEach(e=>e.Destroy());
      Game.player.powerups.forEach(e=>e.Destroy());
      Game.player.powerupsWorld.forEach(e=>e.Destroy());
      Bullet.bulletPool.forEach(e=>e.Disable());

      if(Game._gameEvents) Game._gameEvents.unsubscribe();
      Game._gameEvents = makeGameEvents(document).subscribe(e=>{
        console.log(e);
        Game.events.next(e);
      });
    }
    static sub(type,fn){
      console.log("Game sub");
      return sub(Game.events,type,fn);
    }

    static CheckCollisions(from: GameObject[] = Game.gameObjects, against: GameObject[] | null = null) {
        Game.collisionPairs.length = 0;
        for (let i = 0; i < from.length - 1; i++) {
          let objA = from[i];
          if (!objA.enabled || !objA.collider) continue;

          let aLeft = objA.position.x - (objA.centered ? objA.size.x / 2 : 0);
          let aRight = aLeft + objA.size.x;
          let aTop = objA.position.y - (objA.centered ? objA.size.y / 2 : 0);
          let aBottom = aTop + objA.size.y;

          let start = i+1;
          if(against){start = 0;}
          else against=from;
          for (let j = start; j < against.length; j++) {
            let objB = against[j];
            if (!objB.enabled || !objB.collider) continue;

            let bLeft = objB.position.x - (objB.centered ? objB.size.x / 2 : 0);
            let bRight = bLeft + objB.size.x;
            let bTop = objB.position.y - (objB.centered ? objB.size.y / 2 : 0);
            let bBottom = bTop + objB.size.y;

            if (aRight > bLeft && aLeft < bRight && aBottom > bTop && aTop < bBottom) {
              Game.collisionPairs.push([objA,objB]);
            }
          }
        }
        return Game.collisionPairs;
      }
      
    static generateRandomPoint(padding: number): Vector {
      return {
        x: (-1300/2) + padding + Math.random() * ((1300) - 2 * padding),
        y: (-900/2) + padding + Math.random() * ((900) - 2 * padding)
      };
    }
}
