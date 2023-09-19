import { fromEvent, interval, asyncScheduler, timer, Subject } from 'rxjs';
import { filter, map, withLatestFrom,tap,  timestamp, take, throttleTime, concatMap, pairwise,scan, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { Game } from './_Game';
import GameObject from './GameObject';
import { Vector, VecDir, VecSub, VecAdd, VecMul, VecNormalize, VecDist } from './Vector';
import {Powerup} from './Powerup'


export default class Player extends GameObject {
    hp:number=100;
    speed:number = 0.6;
    powerups:any[] = [];
    playerLastPosition:Vector={x:0,y:0};

    constructor(){
        super();
        this.name = 'player';
        this.color = 'green';
        
        Game.reset$.subscribe(()=>{
            this.hp = 100;
            this.powerups = [];
            this.position = (this.playerLastPosition = { x: 0, y: 0 });
            this.setupListeners();
        });
    }

    setupListeners(){
        this.Tick.pipe(
            takeUntil(Game.reset$), ////
            filter(()=>this.hp>0),
            map((deltaTime:number) => ({
                y: Game.Input.getKey('w') ? -this.speed*deltaTime : Game.Input.getKey('s') ? this.speed*deltaTime : 0,
                x: Game.Input.getKey('a') ? -this.speed*deltaTime : Game.Input.getKey('d') ? this.speed*deltaTime : 0,
            })),
            scan((position, movement :Vector) => ({ ////// ******
                y: position.y + movement.y,
                x: position.x + movement.x,
            }), { y: 0, x: 0 })
        ).subscribe(position => {
            this.playerLastPosition = this.position;
            this.position = position;
            Game.cameraPos = this.position;
        });
    }
}