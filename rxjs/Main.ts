/*
const { fromEvent, interval } = rxjs;
const { filter, map, withLatestFrom,tap,  timestamp, pairwise,scan, startWith, switchMap } = rxjs.operators;
*/
import { fromEvent, interval, asyncScheduler, timer } from 'rxjs';
import { filter, map, withLatestFrom,tap,  timestamp, take, throttleTime, concatMap, pairwise,scan, startWith, switchMap, skip } from 'rxjs/operators';
import { Game } from './_Game';
import GameObject from './GameObject';
import { Vector, VecDir, VecSub, VecAdd, VecMul, VecNormalize, VecDist } from './Vector';
import Bullet from './Bullet';
import Player from './_Player';
import Enemy from './_Enemy';
import Powerup from './Powerup';

import { makeGameEvents,sub } from './__GameLogic';
import { gradual,throttleWrap } from './__Helpers';
import { randImg } from './randImg';
import { weapons } from './Levels';
import { levels } from './Levels';

declare let canvas : HTMLElement;

let etime = 0;
let enextSpawn = 7000;
let enextS = 3000 + enextSpawn * (0.5+Math.random()/2);     
let ptime = 0;
let pcount = 0;
let pnextSpawn = 7000;
let pnextS = 3000 + pnextSpawn * (0.5+Math.random()/2);     

new Game();
window['Game'] = Game;


let sceneSize = [1000,700];
Game.sceneExtents.x = -sceneSize[0]/2;
Game.sceneExtents.y = -sceneSize[1]/2;
Game.cameraOffset.x = -sceneSize[0]/2;
Game.cameraOffset.y = -sceneSize[1]/2;
Game.sceneExtents.xSize = sceneSize[0];
Game.sceneExtents.ySize = sceneSize[1];
window['scene'] = new GameObject();
Object.assign(window['scene'],{position:{x:0,y:0},collider:false,size:{x:Game.sceneExtents.xSize,y:Game.sceneExtents.ySize},centered:true,color:'black'});

randImg();

let player = Game.player = window['player'] = new Player();

Game.Input.subKey('e',1,()=>{
    Game.reset();
});



let mouseCursor = new GameObject();
mouseCursor.size = {x:40,y:40};
mouseCursor.collider = false;
mouseCursor.boundByScene = false;
mouseCursor.color = 'transparent';
mouseCursor.customStyle = "border: 3px solid pink; border-radius: 50%; opacity: 0.3; z-index:50;";
mouseCursor.Tick.subscribe(()=>{
    mouseCursor.position = Game.Input.mouseW;
});



Game.sub('fireWeapon',(fireEv)=>{
  if(player.hp<=0)return;
  let weapon = fireEv.weapon;
  let b = Bullet.shoot(
    player.position,VecDir(player.position,Game.Input.mouseW),
    0,0.9
    );
  b.color = weapons[weapon].color;
  b.damage = weapons[weapon].damage;
});

Game.Input.subKey('g',1,()=>{
    Game.timeScale = ((Game.timeScale > 0.99)?0.4:1.0);
});

function switchLevel(i){
  if(!levels[i])return;
  Game.curLevel = i;
  Game.reset();
  (window as any).uiMgr.T_Text.innerHTML = "Level "+i;
  gradual((i)=>{
    (window as any).uiMgr.T_Text.style.opacity = (1.0-(i*i)).toString();
  },null,6000,30,true);

  levels[i].load();

}

//Game.sub('levelSwitch',(l)=>console.log(l));
//Game.sub('restart',(l)=>console.log(l));

Game.events.subscribe(e=>{
  console.log(">>>>>>>>>",e);
  //if(e.type=='weaponSwitch') curWeapon=e.value;
  if(e.type=='levelSwitch') switchLevel(e.value);
  if(e.type=='restart') switchLevel(Game.curLevel);
});


Game.ticks$.subscribe(function(){
    let cols = Game.CheckCollisions(Bullet.bulletPool,[player,...Enemy.enemies]) as any[][];
    
    for(var i = 0; i < cols.length; i++){
      if(cols[i][1]==player){
          if(cols[i][0].type===1){
              cols[i][0].Disable();
              player.hp-=cols[i][0].damage;
              if(player.hp<=0){
                  (window as any).uiMgr.T_Text.innerHTML = "You are dead.";
                  (window as any).uiMgr.T_Text.style.opacity = "1";
              }
          }
      }else{
          if(cols[i][0].type===0){
              cols[i][0].Disable();
              cols[i][1].hp-=cols[i][0].damage;
              console.log("enemy hurt");
              if(cols[i][1].hp<=0){
                  cols[i][1].Destroy();
                  Game.score++;
              }
              
          }
      }
    }

    //cols = Game.CheckCollisions(player.powerupsWorld,[player]) as any[][];
    for(var i = 0; i<player.powerupsWorld.length; i++){
        
        if(VecDist(player.position,player.powerupsWorld[i].position)<50){
        //if(cols[i][0]==player||cols[i][1]==player){
            //player.powerups.push("Powerup");
            player.hp+=30;
            pcount--;
            //window['appComponent'].rerender();
            player.powerupsWorld[i].Destroy();
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
  //return;
    if(pcount>2) return;
    ptime+=deltaTime;
    if(ptime>pnextS){
        ptime = 0;
        pcount++;
        let e = new Powerup();
        e.position = Game.generateRandomPoint(100);
        pnextSpawn*=0.99;
        pnextS = 3000 + pnextSpawn * (0.5+Math.random()/2);
    }

});


switchLevel(1);