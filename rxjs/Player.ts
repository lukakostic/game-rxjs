import { fromEvent, interval, asyncScheduler, timer } from 'rxjs';
import { filter, map, withLatestFrom,tap,  timestamp, take, throttleTime, concatMap, pairwise,scan, startWith, switchMap } from 'rxjs/operators';
import Game from './Game';
import GameObject from './GameObject';
import { Vector, VecDir, VecSub, VecAdd, VecMul, VecNormalize, VecDist } from './Vector';



export default class Player extends GameObject {
    hp:number=100;
    speed:number = 0.8;
    powerups:any[] = [];
    playerLastPosition:Vector={x:0,y:0};
    constructor(){
        super();
        this.name = 'player';
        this.color = 'green';
        this.reset();
        this.Tick.pipe(
            map((deltaTime:number) => ({
                y: Game.Input.getKey('w') ? -this.speed*deltaTime : Game.Input.getKey('s') ? this.speed*deltaTime : 0,
                x: Game.Input.getKey('a') ? -this.speed*deltaTime : Game.Input.getKey('d') ? this.speed*deltaTime : 0,
            })),
            scan((position, movement :Vector) => ({
                y: position.y + movement.y,
                x: position.x + movement.x,
            }), { y: 0, x: 0 })
        ).subscribe(position => {
            this.playerLastPosition = this.position;
            this.position = position;
            Game.cameraPos = this.position;
        });
    }
    reset(){
        this.hp = 100;
        this.powerups = [];
        window['playerLastPosition'] ??={ x: 0, y: 0 };
        this.playerLastPosition = window['playerLastPosition'];
        //powerupsWorld = [];
    }
}