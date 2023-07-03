import { fromEvent, interval, asyncScheduler, timer } from 'rxjs';
import { filter, map, withLatestFrom,tap,  timestamp, take, throttleTime, concatMap, pairwise,scan, startWith, switchMap } from 'rxjs/operators';
import Game from './Game';
import GameObject from './GameObject';
import { Vector, VecDir, VecSub, VecAdd, VecMul, VecNormalize, VecDist } from './Vector';
import Bullet from './Bullet';


export default class Powerup extends GameObject {
    value = "Powerup" as string;
    constructor(){
        super();
        this.name = 'powerup';
        this.value = "Powerup";
        this.size = {x:20,y:20};
        this.color = 'lime';
        Game.player.powerupsWorld.push(this);

    }
    override Destroy(){

        const index = Game.player.powerupsWorld.indexOf(this);
        if (index > -1) { // only splice array when item is found
            Game.player.powerupsWorld.splice(index, 1); // 2nd parameter means remove one item only
        }
        return super.Destroy();

    }
    

}