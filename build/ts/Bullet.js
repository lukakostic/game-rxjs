import { map, scan } from 'rxjs/operators';
import GameObject from './GameObject';
export default class Bullet extends GameObject {
    static { this.bulletPool = []; }
    constructor(vecPos, vecDir, type) {
        super();
        this.tickFn = null;
        this.name = 'bullet';
        this.size = { x: 14, y: 14 };
        this.color = 'yellow';
        this.centered = true;
        this.enabled = false; // All bullets are disabled initially
        this.vecDir = vecDir;
        // Enable the bullet and set its parameters
        this.enabled = true;
        this.position = { ...vecPos };
        this.type = type;
        this.speed = 1.7;
        //b.homing = false;
        this.homingRate = 0.2;
        this.damage = 99;
        this.tickFn = null;
    }
    static shoot(vecPos, vecDir, type, speed = 1.7, inaccuracy = 0) {
        // Find the first disabled bullet
        let b = Bullet.bulletPool.find(bullet => !bullet.enabled);
        //vecDir is a unit vecotr {x,y}, we need to rotate it by random angle * inaccuracy
        if (inaccuracy > 0.01) {
            let angle = ((Math.random() - 0.5) * Math.PI / 2) * inaccuracy;
            vecDir = {
                x: vecDir.x * Math.cos(angle) - vecDir.y * Math.sin(angle),
                y: vecDir.x * Math.sin(angle) + vecDir.y * Math.cos(angle)
            };
        }
        if (!b) {
            b = new Bullet(vecPos, vecDir, type);
            Bullet.bulletPool.push(b);
        }
        b.vecDir = vecDir;
        // Enable the bullet and set its parameters
        b.enabled = true;
        b.position = { ...vecPos };
        b.type = type;
        b.speed = speed;
        b.lifetimeClock = 0;
        //b.homing = false;
        b.homingRate = 0.2;
        b.tickFn = null;
        b.Tick.pipe(map((deltaTime) => {
            let c = ({
                x: b.vecDir.x * b.speed * deltaTime,
                y: b.vecDir.y * b.speed * deltaTime,
            });
            if (b.tickFn)
                c = b.tickFn(deltaTime, c, b);
            return c;
        }), scan((position, movement) => ({
            y: position.y + movement.y,
            x: position.x + movement.x,
        }), b.position)).subscribe((pos) => {
            b.position = pos;
        });
        if (b.homing)
            b.homing.unsubscribe();
        b.CollidedSceneEdge.subscribe(() => {
            b.Disable(); // Disable the bullet when it collides with the scene edge
        });
        return b;
    }
}
//# sourceMappingURL=Bullet.js.map