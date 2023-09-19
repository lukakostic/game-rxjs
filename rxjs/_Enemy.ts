import { fromEvent, interval, asyncScheduler, timer } from 'rxjs';
import { delay,filter, map, withLatestFrom,tap,  timestamp, take, throttleTime, concatMap, pairwise,scan, startWith, switchMap } from 'rxjs/operators';
import { Game } from './_Game';
import GameObject from './GameObject';
import { Vector, VecDir, VecSub, VecAdd, VecMul, VecNormalize, VecDist } from './Vector';
import Bullet from './Bullet';


export default class Enemy extends GameObject {
    static enemies = [] as Enemy[];

    hp:number=100;
    boss:boolean = false;

    static predictFuturePosition(dist) {

        let velocity = {
            x: Game.player.position.x - Game.player.playerLastPosition.x,
            y: Game.player.position.y - Game.player.playerLastPosition.y
        };
        
        //let magnitude = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);
        //if(magnitude==0) magnitude = 1;
        let direction = {
            x: velocity.x,// / magnitude,
            y: velocity.y// / magnitude
        };
    
        let futurePosition = {
            x: Game.player.position.x + direction.x * dist,
            y: Game.player.position.y + direction.y * dist
        };
    
        return futurePosition;
    }

    constructor(boss=false){
        super();
        this.name = 'enemy';
        this.hp = 100;
        //this.customStyle = "border: 2px solid red";
        this.boss = boss;
        this.Tick.pipe(
            throttleTime(this.boss?(600+Math.random()*400):1000)  ////// ******
        ).subscribe(()=>{
            let dist = VecDist(this.position,Game.player.position) * 0.03;
            let playerPos = Enemy.predictFuturePosition(dist);
            

            if(!this.boss){
                let b = Bullet.shoot(this.position,VecDir(this.position, playerPos),1);
                //b.speed = 1.1;
                b.speed = 0.6;
                b.color = 'red';
                b.damage = 15;
                b.homingRate = 0.06;
                b.homing = b.Tick.pipe(
                    throttleTime(300), take(3)    ////// ******
                ).subscribe(()=>{
                    let dist = VecDist(b.position,Game.player.position) * b.homingRate;
                    let playerPos = Enemy.predictFuturePosition(dist);
                    b.vecDir = VecDir(b.position, playerPos);
                });
            }else{
                let dir = VecDir(this.position, playerPos);
                let b1 = Bullet.shoot(this.position,dir,1,0.9,0.8);
                let b2 = Bullet.shoot(this.position,dir,1,0.9,0.8);
                let applyB = function(b,offset){
                    //b.speed = 1.1;
                    b.speed = 0.7;
                    b.color = 'hotpink';
                    b.damage = 10;
                    b.lifetimeClock = 0;
                    b.homingRate = 0.06;
                    b.homing = b.Tick.pipe(
                        delay(400),
                        throttleTime(300), take(3)    ////// ******
                    ).subscribe((dt)=>{
                        let dist = VecDist(b.position,Game.player.position) * b.homingRate;
                        let playerPos = Enemy.predictFuturePosition(dist);
                        b.vecDir = VecDir(b.position, playerPos);
                    });

                    // b.tickFn = (dt,c,bl)=>{
                    //     //return c;
                    //     let angle = Math.PI/2;
                    //     //console.log(dir);
                    //     let vec = {
                    //         x: dir.x * Math.cos(angle) - dir.y * Math.sin(angle),
                    //         y: dir.x * Math.sin(angle) + dir.y * Math.cos(angle)
                    //     };
                    //     //console.log(vec);
                    //     //let dirP = {x:dir.y,y:dir.x};
                    //     //console.log(dt);
                    //     if(isNaN(bl.lifetimeClock)) bl.lifetimeClock = 0;
                    //     //console.log(bl.lifetimeClock,dt,Game.timeScale);
                    //     bl.lifetimeClock += (dt/2000) * Game.timeScale;
                        
                    //     let s = (offset*Math.sin(bl.lifetimeClock))*5;
                    //     //console.log(bl.lifetimeClock,s);
                    //     let v = VecMul(vec,s);
                    //     return VecAdd(c,v);
                    // };
                }
                applyB(b1,-1);
                applyB(b2,1);
            }
        });
        Enemy.enemies.push(this);

    }
    override Destroy(){

        const index = Enemy.enemies.indexOf(this);
        if (index > -1) {
            Enemy.enemies.splice(index, 1);
        }
        return super.Destroy();

    }


}