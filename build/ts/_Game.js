import { interval, Subject } from 'rxjs';
import { filter, map, tap, timestamp, pairwise } from 'rxjs/operators';
import InputManager from './_InputManager';
import Enemy from './_Enemy';
import Bullet from './Bullet';
import { makeGameEvents, sub } from './__GameLogic';
export function getViewportSize() {
    return { x: window.innerWidth, y: window.innerHeight };
}
export function getViewportCenter() {
    let size = getViewportSize();
    size.x /= 2;
    size.y /= 2;
    return size;
}
export class Game {
    static { this.reset$ = new Subject(); }
    static { this.player = null; }
    static { this.canvas = null; }
    static { this.Input = null; }
    static { this.ticks$ = null; }
    static { this.cameraOffset = { x: -250, y: -250 }; }
    static { this.cameraPos = { x: 0, y: 0 }; }
    static { this.sceneExtents = { y: -250, x: -250, xSize: 500, ySize: 500 }; }
    static { this.gameObjects = []; }
    static { this.powerupsWorld = []; }
    static { this.paused = false; }
    static { this.deltaTime = 0; }
    static { this.timeScale = 1.0; }
    static { this.collisionPairs = []; } //cached last CollisionCheck
    static { this.viewportCenter = getViewportCenter(); }
    static { this.score = 0; }
    static { this._gameEvents = null; }
    static { this.curLevel = 0; }
    static { this.curWeapon = 1; }
    constructor() {
        Game.canvas = document.getElementById('canvas');
        Game.Input = new InputManager();
        Game.ticks$ = interval(0).pipe(////// ******
        timestamp(), pairwise(), ////// ******
        map(([previous, current]) => {
            (Game.deltaTime = (current.timestamp - previous.timestamp) * Game.timeScale);
            if (Game.deltaTime > 5)
                Game.deltaTime = 5;
            return Game.deltaTime;
        }), 
        //da imamo deltaTime izmedju emissija
        tap(() => Game.Input?.tick()), filter(() => !Game.paused));
        window.addEventListener('resize', () => {
            console.log('resize ', getViewportCenter());
            Game.viewportCenter = getViewportCenter();
        });
        Game.events = new Subject();
        Game.curLevel = 1;
    }
    static reset() {
        Game.reset$.next(1);
        Game.score = 0;
        [...Enemy.enemies].forEach(e => e.Destroy());
        Game.player.powerups = []; // .forEach(e=>e.Destroy());
        [...Game.powerupsWorld].forEach(e => e.Destroy());
        Bullet.bulletPool.forEach(e => e.Disable());
        Game.player.innerHTML = "<span></span>";
        if (Game._gameEvents)
            Game._gameEvents.unsubscribe();
        Game._gameEvents = makeGameEvents().subscribe(e => {
            Game.events.next(e);
        });
    }
    static sub(type, fn) {
        console.log("Game sub");
        return sub(Game.events, type, fn);
    }
    static CheckCollisions(from = Game.gameObjects, against = null) {
        Game.collisionPairs.length = 0;
        for (let i = 0; i < from.length - 1; i++) {
            let objA = from[i];
            if (!objA.enabled || !objA.collider)
                continue;
            let aLeft = objA.position.x - (objA.centered ? objA.size.x / 2 : 0);
            let aRight = aLeft + objA.size.x;
            let aTop = objA.position.y - (objA.centered ? objA.size.y / 2 : 0);
            let aBottom = aTop + objA.size.y;
            let start = i + 1;
            if (against) {
                start = 0;
            }
            else
                against = from;
            for (let j = start; j < against.length; j++) {
                let objB = against[j];
                if (!objB.enabled || !objB.collider)
                    continue;
                let bLeft = objB.position.x - (objB.centered ? objB.size.x / 2 : 0);
                let bRight = bLeft + objB.size.x;
                let bTop = objB.position.y - (objB.centered ? objB.size.y / 2 : 0);
                let bBottom = bTop + objB.size.y;
                if (aRight > bLeft && aLeft < bRight && aBottom > bTop && aTop < bBottom) {
                    Game.collisionPairs.push([objA, objB]);
                }
            }
        }
        return Game.collisionPairs;
    }
    static generateRandomPoint(padding) {
        return {
            x: (-Game.sceneExtents.x / 2) + padding + Math.random() * ((Game.sceneExtents.x) - 2 * padding),
            y: (-Game.sceneExtents.y / 2) + padding + Math.random() * ((Game.sceneExtents.y) - 2 * padding)
        };
    }
}
//# sourceMappingURL=_Game.js.map