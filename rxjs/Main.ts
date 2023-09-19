/*
const { fromEvent, interval } = rxjs;
const { filter, map, withLatestFrom,tap,  timestamp, pairwise,scan, startWith, switchMap } = rxjs.operators;
*/
import { fromEvent, interval, asyncScheduler, timer, Subject } from 'rxjs';
import { filter, map, withLatestFrom,tap,  timestamp, take, throttleTime, concatMap, pairwise,scan, startWith, switchMap, skip } from 'rxjs/operators';
import { Game } from './_Game';
import GameObject from './GameObject';
import { Vector, VecDir, VecSub, VecAdd, VecMul, VecNormalize, VecDist } from './Vector';
import Bullet from './Bullet';
import Player from './_Player';
import Enemy from './_Enemy';
import {Powerup} from './Powerup';

import { makeGameEvents,sub,playerHurt$,enemyHurt$/*,playerHurt2$,enemyHurt2$*/, playerCollect$ } from './__GameLogic';
import { gradual,throttleWrap } from './__Helpers';
import { randImg } from './randImg';
import { weapons,levels, powerups } from './GameData';


declare let canvas : HTMLElement;

let etime = 0;
let enextSpawn = 7000;
let enextS = 3000 + enextSpawn * (0.5+Math.random()/2);     
let ptime = 0;
let pcount = 0;
let pnextSpawn = 3000;
let pnextS = 3000 + pnextSpawn * (0.5+Math.random()/2);     

new Game();
window['Game'] = Game;
window['Enemy'] = Enemy;


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

Game.Input.subKey('[',1,()=>{
    pnextS = 0;
});



let mouseCursor = new GameObject();
mouseCursor.size = {x:40,y:40};
mouseCursor.collider = false;
mouseCursor.boundByScene = false;
mouseCursor.color = 'transparent';
mouseCursor.customStyle = "border: 5px solid hotpink; border-radius: 50%; opacity: 0.4; z-index:50;";
mouseCursor.Tick.subscribe(()=>{
    mouseCursor.position = Game.Input.mouseW;
});


function switchLevel(i){
  if(!levels[i])return;
  Game.curLevel = i;
  levels[Game.curLevel].initialWeapon = Game.curWeapon;
  Game.reset();
  pcount=0;
  (window as any).uiMgr.T_Text.innerHTML = "Level "+i;
  
  gradual((i)=>{
    (window as any).uiMgr.T_Text.style.opacity = (1.0-(i*i)).toString();
  },null,6000,30,true);

  levels[i].load();
  (window as any).uiMgr.maxEnemies = levels[Game.curLevel].enemies.length;

}


Game.sub('fireWeapon',(fireEv)=>{
  if(player.hp<=0)return;

  let dmgMul = 1;
  player.powerups.forEach(p=>{
    if(p.name=="Damage") dmgMul*=1.2;
  });
  
  let weapon = fireEv.weapon;
  let b = Bullet.shoot(
    player.position,VecDir(player.position,Game.Input.mouseW),
    0,0.9,
    weapons[weapon].inaccuracy
    );
  b.color = weapons[weapon].color;
  b.damage = weapons[weapon].damage;
});

Game.Input.subKey('g',1,()=>{
    Game.timeScale = ((Game.timeScale > 0.99)?0.4:1.0);
});


Game.events.subscribe(e=>{

  if(e.type=='levelSwitch') switchLevel(e.value);

  if(e.type=='restart') switchLevel(Game.curLevel);

  if(e.type=='dmgPopup'){
    let {entity,value} = e;
    if(e.value === null){
      entity.innerHTML = "<span></span>";
    }else{
      value=-value.toFixed(2);
      let v = (value<0?'':'+')+value.toString();
      let c = (value<0?'orange':'lime');
      entity.innerHTML = `<span style="
      position:absolute;  text-shadow: 2px 2px black; 
      font-size:20px;font-weight:600;color:${c};
      width:100%;text-align:center;margin-top:-40px;">${v}</span>`;
    }
  }

});

playerCollect$.subscribe((idx)=>{
  let p = powerups[idx];
  p.fn();
});

playerHurt$.subscribe((obj)=>{
  player.hp -= obj.value;
  if(player.hp<=0){
    (window as any).uiMgr.T_Text.innerHTML = "You are dead.";
    (window as any).uiMgr.T_Text.style.opacity = "1";
    player.hp = 0;
  }
  if(player.hp>100){
    player.hp = 100;
  }
});

enemyHurt$.subscribe(obj=>{
  obj.enemy.hp -= obj.value;
  if(obj.enemy.hp<=0){
    obj.enemy.Destroy();
    Game.score++;
}
});

Game.ticks$.subscribe(function(deltaTime){

    [...Game.player.powerups].forEach((v,i)=>{
        v.value -= (deltaTime/1000);//*Game.timeScale;
        if(v.value<0){
          Game.player.powerups.splice(i, 1);
        }
    });

    let cols = Game.CheckCollisions(Bullet.bulletPool,[player,...Enemy.enemies]) as any[][];
    
    for(var i = 0; i < cols.length; i++){
      if(cols[i][1]==player){
          if(cols[i][0].type===1){
              cols[i][0].Disable();
              //player.hp-=cols[i][0].damage;
              playerHurt$.next({value:cols[i][0].damage});
          }
      }else{
          if(cols[i][0].type===0){
              cols[i][0].Disable();
              enemyHurt$.next({enemy:cols[i][1],value:cols[i][0].damage});
          }
      }
    }

    //cols = Game.CheckCollisions(player.powerupsWorld,[player]) as any[][];
    for(var i = 0; i<Game.powerupsWorld.length; i++){
        if(VecDist(player.position,Game.powerupsWorld[i].position)<40){
        
            playerCollect$.next(Game.powerupsWorld[i].idx);
            pcount--;
        
            Game.powerupsWorld[i].Destroy();
        }
    }
});


let psub = Game.ticks$.subscribe(function(deltaTime){
  
    if(Game.curLevel!=4){
      if(pcount>2) return;
    } else if(pcount>4) return;

    ptime+=deltaTime;
    if(ptime>pnextS){
        ptime = 0;
        pcount++;
    
        let idx = Math.floor(Math.random()*powerups.length);
        let e = Object.assign(new Powerup(powerups[idx].powName),
          powerups[idx]
        );
        e.idx = idx;
        e.innerHTML = e.symbol;
        e.position = Game.generateRandomPoint(100);
    
        //pnextSpawn*=0.99;
        if(Game.curLevel!=4)
          pnextS = 3000 + pnextSpawn * (0.5+Math.random()/2);
        else{
          pnextS = 3000;
        }
    }

});


switchLevel(0);