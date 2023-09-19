//import {Game} from "./_Game";
//import { levels } from "./Levels";

//declare let window : {uiMgr:any};

let hb = document.getElementById('healthbar');
let sc = document.getElementById('game-score');
let pw = document.getElementById('powerups');
let pwHash = "";

window.uiMgr = {
    BL_text : document.getElementById('botLeftText'),
    T_Text : document.getElementById('T_Text'),
    maxEnemies:0,
}
setInterval(()=>{
  if(Game==null) return;
  if(Game.score == window.uiMgr.maxEnemies)
    sc.innerHTML = "Level finished!";
  else
    sc.innerHTML = Game.score.toString() + "/" + window.uiMgr.maxEnemies.toString();
  hb.innerHTML = Game.player.hp.toString();

function getGradient(){
  let hp = Game.player.hp;
  hp*=0.9;
  let rest = 100 - hp;
  return `linear-gradient(125deg, green ${hp}%, transparent ${hp}%)`;
}

function getPWGradient(powerup){
  let max = powerup.data.value;
  let val = powerup.value;
  let v = (val/max)*100;
  let rest = 100 - v;
  return `linear-gradient(0deg, ${powerup.data.color} ${v}%, darkgrey ${v}%)`;
}

(hb).style = `background: ${getGradient()}`;

  let pwHash2 = "";
  Game.player.powerups.forEach(p=>{
    pwHash2 += p.name+p.value;
  });
  if(pwHash!=pwHash2){
    pwHash = pwHash2;
    let html = "";
    Game.player.powerups.forEach(p=>{
      html += `<p class="powerup" style="background: ${getPWGradient(p)};">${p.name}</p>`
    });
    pw.innerHTML = html;
  }
},10);