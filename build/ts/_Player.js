import { filter, map, scan, takeUntil } from 'rxjs/operators';
import { Game } from './_Game';
import GameObject from './GameObject';
export default class Player extends GameObject {
    constructor() {
        super();
        this.hp = 100;
        this.speed = 0.6;
        this.powerups = [];
        this.playerLastPosition = { x: 0, y: 0 };
        this.name = 'player';
        this.color = 'green';
        Game.reset$.subscribe(() => {
            this.hp = 100;
            this.powerups = [];
            this.position = (this.playerLastPosition = { x: 0, y: 0 });
            this.setupListeners();
        });
    }
    setupListeners() {
        this.Tick.pipe(takeUntil(Game.reset$), ////
        filter(() => this.hp > 0), map((deltaTime) => ({
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
}
//# sourceMappingURL=_Player.js.map