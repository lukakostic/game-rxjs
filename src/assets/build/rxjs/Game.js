import { interval, asyncScheduler } from 'rxjs';
import { filter, map, tap, timestamp, pairwise } from 'rxjs/operators';
import InputManager from './InputManager';
export function getViewportSize() {
    return { x: window.innerWidth, y: window.innerHeight };
}
export function getViewportCenter() {
    let size = getViewportSize();
    size.x /= 2;
    size.y /= 2;
    return size;
}
class Game {
    static { this.player = null; }
    static { this.canvas = null; }
    static { this.Input = null; }
    static { this.ticks$ = null; }
    static { this.cameraOffset = { x: -250, y: -250 }; }
    static { this.cameraPos = { x: 0, y: 0 }; }
    static { this.sceneExtents = { y: -250, x: -250, xSize: 500, ySize: 500 }; }
    static { this.gameObjects = []; }
    static { this.paused = false; }
    static { this.deltaTime = 0; }
    static { this.timeScale = 1.0; }
    static { this.collisionPairs = []; } //cached last CollisionCheck
    static { this.viewportCenter = getViewportCenter(); }
    static { this.score = 0; }
    constructor() {
        console.log("CONSTRUCTING");
        Game.canvas = document.getElementById('canvas');
        Game.Input = new InputManager();
        Game.ticks$ = interval(0, asyncScheduler).pipe(timestamp(), pairwise(), map(([previous, current]) => (Game.deltaTime = (current.timestamp - previous.timestamp) * Game.timeScale)), 
        //da imamo deltaTime izmedju emissija
        tap(() => Game.Input?.tick()), filter(() => !Game.paused));
        window.addEventListener('resize', () => {
            console.log('resize ', getViewportCenter());
            Game.viewportCenter = getViewportCenter();
        });
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
}
export default Game;
//# sourceMappingURL=Game.js.map