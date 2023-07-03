/*
const { fromEvent, interval } = rxjs;
const { filter, map, withLatestFrom,tap,  timestamp, pairwise,scan, startWith, switchMap } = rxjs.operators;
*/
import { fromEvent, interval, asyncScheduler, timer } from 'rxjs';
import { filter, map, withLatestFrom,tap,  timestamp, take, throttleTime, concatMap, pairwise,scan, startWith, switchMap } from 'rxjs/operators';
import Game from './Game';
import GameObject from './GameObject';
import { Vector, VecDir, VecSub, VecAdd, VecMul, VecNormalize, VecDist } from './Vector';
import Bullet from './Bullet';
import Player from './Player';
import Enemy from './Enemy';
import Powerup from './Powerup';

let etime = 0;
let enextSpawn = 7000;
let enextS = 3000 + enextSpawn * (0.5+Math.random()/2);     
let ptime = 0;
let pnextSpawn = 7000;
let pnextS = 3000 + pnextSpawn * (0.5+Math.random()/2);     


new Game();
window['Game'] = Game
window['appComponent'].game = Game;
declare let canvas : HTMLElement

let sceneSize = [1300,900];
Game.sceneExtents.x = -sceneSize[0]/2;
Game.sceneExtents.y = -sceneSize[1]/2;
Game.cameraOffset.x = -sceneSize[0]/2;
Game.cameraOffset.y = -sceneSize[1]/2;
Game.sceneExtents.xSize = sceneSize[0];
Game.sceneExtents.ySize = sceneSize[1];
window['scene'] = new GameObject();
Object.assign(window['scene'],{position:{x:0,y:0},collider:false,size:{x:Game.sceneExtents.xSize,y:Game.sceneExtents.ySize},centered:true,color:'black'});

window['appComponent'].enemies = Enemy.enemies;

window['player'] = new Player();
declare let player : Player;
Game.player = player;

window['appComponent'].player = player;

let shoot = (ev: any) => {
    let b = Bullet.shoot(player.position,VecDir(player.position,Game.Input.getMouseWorld()),0);    
    b.color = 'yellow';
    return;
    let n =  1 + player.powerups.length;
    const totalArc = 40;
    const step = totalArc / (n - 1);
    const startAngle = -(totalArc / 2); 
  
    const direction = VecDir(player.position, Game.Input.getMouseWorld());
    
    const rotationMatrix = (angle: number) => {
      const radians = (Math.PI / 180) * angle;
      return {
        x: Math.cos(radians),
        y: Math.sin(radians)
      };
    };
  
    // Shoot n bullets
    for (let i = 0; i < n; i++) {
      let angle = startAngle + (step * i);
      let rotation = rotationMatrix(angle);
      let bulletDirection = {
        x: direction.x * rotation.x - direction.y * rotation.y,
        y: direction.x * rotation.y + direction.y * rotation.x
      };
      
      let b = Bullet.shoot(player.position, VecNormalize(bulletDirection.x,bulletDirection.y), 0);
      b.color = 'yellow';
    }
  };
Game.Input.subMouseKey(0,1,shoot);
Game.Input.subKey(' ',1,shoot);
Game.Input.subKey(' ',1,()=>{
    Game.timeScale = ((Game.timeScale > 0.99)?0.4:1.0);
});
window['appComponent'].rerender();


Game.ticks$.subscribe(function(){
    let cols = Game.CheckCollisions(Bullet.bulletPool,[player,...Enemy.enemies]) as any[][];
    
    for(var i = 0; i < cols.length; i++)
    if(cols[i][1]==player){
        if(cols[i][0].type===1){
            cols[i][0].Disable();
            player.hp-=25;
            if(player.hp<0){
                //window['appComponent'].openDialog()
                player.position = {x:0,y:0};
                Enemy.enemies.forEach(e=>e.Destroy());
                player.powerups.forEach(e=>e.Destroy());
                Bullet.bulletPool.forEach(e=>e.Disable());
                
                player.hp = 100;
                player.powerups = [];
                window['appComponent'].rerender();
                
            }
            //window['appComponent'].rerender()
            console.log('player dmg ',player.hp);
        }
    }else{
        if(cols[i][0].type===0){
            cols[i][0].Disable();
            cols[i][1].hp-=25;
            if(cols[i][1].hp<0){
                cols[i][1].Destroy();
                Game.score++;
                window['appComponent'].rerender();
            }
            
        }
    }
    cols = Game.CheckCollisions(player.powerupsWorld,[player]) as any[][];
    for(var i = 0; i < cols.length; i++){
    if(cols[i][0]==player||cols[i][1]==player){
        player.powerups.push("Powerup");
        window['appComponent'].rerender();
        cols[i][0].Destroy();
    }
}
});

//Enemy.spawner();
/*

let esub = Game.ticks$.subscribe(function(deltaTime){
    etime+=deltaTime;
    console.log(etime);
    if(etime>enextS){
        etime = 0;
        let e = new Enemy();
        e.position = Game.generateRandomPoint(100);
        enextSpawn*=0.99;
        enextS = 3000 + enextSpawn * (0.5+Math.random()/2);
        console.log("SPAWN P");
    }

});
*/
/*
let psub = interval(10000).pipe(
    startWith(0),
    scan((acc) => acc * 0.99, 10),
    map((nextSpawn) => {
      console.log('Spawned');
      return nextSpawn;
    })
  ).subscribe();
  */
  

let psub = Game.ticks$.subscribe(function(deltaTime){
    ptime+=deltaTime;
    if(ptime>pnextS){
        ptime = 0;
        let e = new Powerup();
        e.position = Game.generateRandomPoint(100);
        pnextSpawn*=0.99;
        pnextS = 3000 + pnextSpawn * (0.5+Math.random()/2);
    }

});

//sub.unsubscribe();
