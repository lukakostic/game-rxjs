import { fromEvent, interval, asyncScheduler, timer } from 'rxjs';
import { filter, map, withLatestFrom,tap,  timestamp, take, throttleTime, concatMap, pairwise,scan, startWith, switchMap } from 'rxjs/operators';
import { Game } from './_Game';
import GameObject from './GameObject';
import { Vector, VecDir, VecSub, VecAdd, VecMul, VecNormalize, VecDist } from './Vector';



export default class Bullet extends GameObject {
    static bulletPool = [] as Bullet[];
    vecDir: Vector;
    type:number;
    speed:number;
    homingRate:number;
    homing:any;
    damage:number;

    constructor(vecPos?:Vector,vecDir?:Vector,type?:number){
        super();
        this.name = 'bullet';
        this.size = {x:10,y:10};
        this.color = 'yellow';
        this.centered = true;
        this.enabled = false;  // All bullets are disabled initially
        
        this.vecDir = vecDir;
        // Enable the bullet and set its parameters
        this.enabled = true;
        this.position = {...vecPos};
        this.type = type;
        this.speed = 1.7;
        //b.homing = false;
        this.homingRate = 0.2;
        this.damage = 99;
    }

    static shoot(vecPos,vecDir,type,speed=1.7){
        // Find the first disabled bullet
        let b = Bullet.bulletPool.find(bullet => !bullet.enabled);
        if(!b){ b= new Bullet(vecPos,vecDir,type); Bullet.bulletPool.push(b); }
        
        b.vecDir = vecDir;
        // Enable the bullet and set its parameters
        b.enabled = true;
        b.position = {...vecPos};
        b.type = type;
        b.speed = speed;
        //b.homing = false;
        b.homingRate = 0.2;

        b.Tick.pipe(
            map((deltaTime:number) => ({
                x: b.vecDir.x*b.speed*deltaTime,
                y: b.vecDir.y*b.speed*deltaTime,
            })),
            scan((position, movement:Vector) => ({   ////// ******
                y: position.y + movement.y,
                x: position.x + movement.x,
            }), b.position)
        ).subscribe((pos)=>{
            b.position=pos;
        });
        if(b.homing) b.homing.unsubscribe();
    
        b.CollidedSceneEdge.subscribe(()=>{
            b.Disable();  // Disable the bullet when it collides with the scene edge
        });
    
        return b;
    }
}