/*
const { fromEvent, interval } = rxjs;
const { filter, map, withLatestFrom,tap,  timestamp, pairwise,scan, startWith, switchMap } = rxjs.operators;
*/
import { fromEvent, interval, asyncScheduler } from 'rxjs';
import { filter, map, withLatestFrom,tap,  timestamp, take, throttleTime, pairwise,scan, startWith, switchMap } from 'rxjs/operators';
import Game from './Game';
import GameObject from './GameObject';
import { Vector, VecDir, VecSub, VecAdd, VecMul, VecNormalize, VecDist } from './Vector';

console.log("WORKS!");

new Game();
window['Game'] = Game
declare let canvas : HTMLElement

let sceneSize = [1300,900];
Game.sceneExtents.x = -sceneSize[0]/2;
Game.sceneExtents.y = -sceneSize[1]/2;
Game.cameraOffset.x = -sceneSize[0]/2;
Game.cameraOffset.y = -sceneSize[1]/2;
Game.sceneExtents.xSize = sceneSize[0];
Game.sceneExtents.ySize = sceneSize[1];
window['scene'] = new GameObject(null,canvas);
Object.assign(window['scene'],{position:{x:0,y:0},collider:false,size:{x:Game.sceneExtents.xSize,y:Game.sceneExtents.ySize},centered:true,color:'black'});

let enemies = [] as GameObject[];
window['appComponent'].enemies = enemies;

window['player'] = new GameObject(null,canvas) as any;
declare let player : GameObject & any;
player.name = 'player';
player.hp = 100;
player.color = 'green';

player.powerups = ['Powerup1', 'Powerup2','Powerup1', 'Powerup2','Powerup1', 'Powerup2','Powerup1', 'Powerup2','Powerup1', 'Powerup2','Powerup1', 'Powerup2','Powerup1', 'Powerup2']; //active on player
player.powerupsWorld = [];
const speed = 0.8;
let playerLastPosition = (window['playerLastPosition'] = { x: 0, y: 0 });
console.log("APP COMPONONTNT");
console.log("APP COMPONONTNT",window['appComponent']);
window['appComponent'].player = player;

player.Tick.pipe(
    map((deltaTime:number) => ({
        y: Game.Input.getKey('w') ? -speed*deltaTime : Game.Input.getKey('s') ? speed*deltaTime : 0,
        x: Game.Input.getKey('a') ? -speed*deltaTime : Game.Input.getKey('d') ? speed*deltaTime : 0,
    })),
    scan((position, movement :Vector) => ({
        y: position.y + movement.y,
        x: position.x + movement.x,
    }), { y: 0, x: 0 })
).subscribe(position => {
    playerLastPosition = player.position;
    player.position = position;
    Game.cameraPos = player.position;
});
let shoot = (ev)=>{
    let b = bullet(player.position,VecDir(player.position,Game.Input.getMouseWorld()),0);    
    b.color = 'yellow';
};
Game.Input.subMouseKey(0,1,shoot);
Game.Input.subKey(' ',1,shoot);
Game.Input.subKey(' ',1,()=>{
    Game.timeScale = ((Game.timeScale > 0.99)?0.4:1.0);
});

Game.ticks$.subscribe(function(){
    let cols = Game.CheckCollisions(bulletPool,[player,...enemies]) as any[][];
    
    for(var i = 0; i < cols.length; i++)
    if(cols[i][1]==player){
        if(cols[i][0].type===1){
            cols[i][0].Disable();
            player.hp-=25;
            window['appComponent'].rerender()
            console.log('player dmg ',player.hp);
        }
    }else{
        if(cols[i][0].type===0){
            cols[i][0].Disable();
            cols[i][1].hp-=25;
        }
    }
});


function makeBullet() :GameObject|any{
    let b = new GameObject(null,canvas);
    b.name = 'bullet';
    b.size = {x:10,y:10};
    b.color = 'yellow';
    b.centered = true;
    b.enabled = false;  // All bullets are disabled initially
    return b;
}
let bulletPool = Array(200).fill(undefined).map(makeBullet);
function bullet(vecPos,vecDir,type){
    // Find the first disabled bullet
    let b = bulletPool.find(bullet => !bullet.enabled);
    if(!b){ b=makeBullet(); bulletPool.push(b); }
    b.vecDir = vecDir;
    // Enable the bullet and set its parameters
    b.enabled = true;
    b.position = {...vecPos};
    b.type = type;
    b.speed = 1.7;
    //b.homing = false;
    b.homingRate = 0.2;

    b.Tick.pipe(
        map((deltaTime:number) => ({
            x: b.vecDir.x*b.speed*deltaTime,
            y: b.vecDir.y*b.speed*deltaTime,
        })),
        scan((position, movement:Vector) => ({
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

let enemy = new GameObject(null,canvas);
enemy.name = 'enemy';
enemy.Tick.pipe(
    throttleTime(1000)
  ).subscribe(()=>{
      let dist = VecDist(enemy.position,player.position) * 0.03;
    let playerPos = predictFuturePosition(dist);
    //console.log(playerPos,player.position,dist);
    let b = bullet(enemy.position,VecDir(enemy.position, playerPos),1);
    //b.speed = 1.1;
    b.speed = 0.7;
    b.color = 'red';
    b.homingRate = 0.05;
    b.homing = b.Tick.pipe(throttleTime(300), take(2) ).subscribe(()=>{
        let dist = VecDist(b.position,player.position) * b.homingRate;
        let playerPos = predictFuturePosition(dist);
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
enemies.push(enemy);

function predictFuturePosition(dist) {

    // Calculate player's current velocity
    let velocity = {
        x: player.position.x - playerLastPosition.x,
        y: player.position.y - playerLastPosition.y
    };
    
    // Normalize the velocity to get the direction of movement
    //let magnitude = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);
    //if(magnitude==0) magnitude = 1;
    let direction = {
        x: velocity.x,// / magnitude,
        y: velocity.y// / magnitude
    };

    // Predict future position
    let futurePosition = {
        x: player.position.x + direction.x * dist,
        y: player.position.y + direction.y * dist
    };

    return futurePosition;
}

