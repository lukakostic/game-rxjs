import { fromEvent, interval, asyncScheduler, Timestamp, Observable } from 'rxjs';
import { filter, map, tap,  timestamp, pairwise } from 'rxjs/operators';
import InputManager from './InputManager';
import {Vector} from './Vector';
import Player from './Player';

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


export default class Game {
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

    constructor(){
        console.log("CONSTRUCTING");
        Game.canvas = document.getElementById('canvas') as HTMLCanvasElement;

        Game.Input = new InputManager();

        Game.ticks$ = interval(0, asyncScheduler).pipe(
            timestamp(),
            pairwise(),
            map(([previous, current]) => (Game.deltaTime = (current.timestamp - previous.timestamp)*Game.timeScale)),
            //da imamo deltaTime izmedju emissija
            tap( () => Game.Input?.tick() ),

            filter(() => !Game.paused),
        );

        window.addEventListener('resize', () => {
          console.log('resize ',getViewportCenter());
          Game.viewportCenter = getViewportCenter();
      });
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
}
