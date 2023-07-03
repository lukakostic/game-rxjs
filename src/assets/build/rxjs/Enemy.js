import { take, throttleTime } from 'rxjs/operators';
import Game from './Game';
import GameObject from './GameObject';
import { VecDir, VecDist } from './Vector';
import Bullet from './Bullet';
class Enemy extends GameObject {
    static { this.enemies = []; }
    static predictFuturePosition(dist) {
        let velocity = {
            x: Game.player.position.x - Game.player.playerLastPosition.x,
            y: Game.player.position.y - Game.player.playerLastPosition.y
        };
        //let magnitude = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);
        //if(magnitude==0) magnitude = 1;
        let direction = {
            x: velocity.x,
            y: velocity.y // / magnitude
        };
        let futurePosition = {
            x: Game.player.position.x + direction.x * dist,
            y: Game.player.position.y + direction.y * dist
        };
        return futurePosition;
    }
    constructor(parent = null, htmlParent = document.body) {
        super(parent, htmlParent);
        this.name = 'enemy';
        this.Tick.pipe(throttleTime(1000)).subscribe(() => {
            let dist = VecDist(this.position, Game.player.position) * 0.03;
            let playerPos = Enemy.predictFuturePosition(dist);
            //console.log(playerPos,player.position,dist);
            let b = Bullet.shoot(this.position, VecDir(this.position, playerPos), 1);
            //b.speed = 1.1;
            b.speed = 0.7;
            b.color = 'red';
            b.homingRate = 0.05;
            b.homing = b.Tick.pipe(throttleTime(300), take(2)).subscribe(() => {
                let dist = VecDist(b.position, Game.player.position) * b.homingRate;
                let playerPos = Enemy.predictFuturePosition(dist);
                b.vecDir = VecDir(b.position, playerPos);
            });
            /*
                b.homingRate = 0.25;
                b.homing = b.Tick.pipe(throttleTime(300) ).subscribe(()=>{
                    let dist = VecDist(b.position,player.position) * b.homingRate;
                    let playerPos = predictFuturePosition(dist);
                    b.vecDir = VecDir(b.position, playerPos);
                        //console.log(b.position,player.position,b.vecDir)
                    b.speed *= 1.1;
                    b.homingRate *= 0.8;
                            
                    /*
                    let vecDirToPlayer = VecDir(b.position, playerPos);
                    let weightedCurrentDirection = VecMul(b.vecDir, 1 - b.homingRate);
                    let weightedDirectionToPlayer = VecMul(vecDirToPlayer, b.homingRate);
                    b.vecDir = VecNormalize(VecAdd(weightedCurrentDirection, weightedDirectionToPlayer));
                    */
            //});
        });
        Enemy.enemies.push(this);
    }
}
export default Enemy;
//# sourceMappingURL=Enemy.js.map