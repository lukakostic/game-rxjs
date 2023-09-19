import { fromEvent, interval, asyncScheduler, timer } from 'rxjs';
import { filter, map, withLatestFrom,tap,  timestamp, take, throttleTime, concatMap, pairwise,scan, startWith, switchMap } from 'rxjs/operators';
import { Game } from './_Game';
import GameObject from './GameObject';
import { Vector, VecDir, VecSub, VecAdd, VecMul, VecNormalize, VecDist } from './Vector';
import Bullet from './Bullet';


export class Powerup extends GameObject {
    powName = "Powerup";
    description = "";
    value:any = null;
    idx:number;
    constructor(powerupName,value=null,desc="",col=null){
        super();
        this.name = 'powerup';
        this.powName = powerupName;
        this.customStyle = "word-wrap: anywhere; text-align: center; color:orange; font-weight:600; overflow: hidden; border-radius: 7px;"
        this.value = value;
        this.description = desc;
        this.size = {x:30,y:30};
        this.color = col||'lime';
        Game.powerupsWorld.push(this);

    }
    override Destroy(){

        const index = Game.powerupsWorld.indexOf(this);
        if (index > -1) {
            Game.powerupsWorld.splice(index, 1);
        }
        return super.Destroy();

    }
    

}