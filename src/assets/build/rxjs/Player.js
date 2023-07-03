import { map, scan } from 'rxjs/operators';
import Game from './Game';
import GameObject from './GameObject';
export default class Player extends GameObject {
    constructor() {
        super();
        this.hp = 100;
        this.speed = 0.8;
        this.powerups = [];
        this.powerupsWorld = [];
        this.playerLastPosition = { x: 0, y: 0 };
        this.name = 'player';
        this.color = 'green';
        this.reset();
        this.Tick.pipe(map((deltaTime) => ({
            y: Game.Input.getKey('w') ? -this.speed * deltaTime : Game.Input.getKey('s') ? this.speed * deltaTime : 0,
            x: Game.Input.getKey('a') ? -this.speed * deltaTime : Game.Input.getKey('d') ? this.speed * deltaTime : 0,
        })), scan((position, movement) => ({
            y: position.y + movement.y,
            x: position.x + movement.x,
        }), { y: 0, x: 0 })).subscribe(position => {
            this.playerLastPosition = this.position;
            this.position = position;
            Game.cameraPos = this.position;
        });
    }
    reset() {
        this.hp = 100;
        this.powerups = [];
        window['playerLastPosition'] ??= { x: 0, y: 0 };
        this.playerLastPosition = window['playerLastPosition'];
        //powerupsWorld = [];
    }
}
//# sourceMappingURL=Player.js.map