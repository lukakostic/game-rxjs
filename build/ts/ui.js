import { Game } from "./_Game";
import { levels } from "./Levels";
let hb = document.getElementById('healthbar');
let sc = document.getElementById('game-score');
let pw = document.getElementById('powerups');
let pwHash = "";
window.uiMgr = {
    BL_text: document.getElementById('botLeftText'),
    T_Text: document.getElementById('T_Text'),
};
setInterval(() => {
    if (Game == null)
        return;
    sc.innerHTML = Game.score.toString() + "/" + levels[Game.curLevel].enemies.length.toString();
    hb.innerHTML = Game.player.hp.toString();
    function getGradient() {
        let hp = Game.player.hp;
        hp *= 0.9;
        let rest = 100 - hp;
        return `linear-gradient(125deg, green ${hp}%, transparent ${hp}%)`;
    }
    hb.style = `background: ${getGradient()}`;
    let pwHash2 = "";
    Game.player.powerups.forEach(p => {
        pwHash2 += p.name + p.value;
    });
    if (pwHash != pwHash2) {
        pwHash = pwHash2;
        let html = "";
        Game.player.powerups.forEach(p => {
            html += `<p>${p.name}</p>`;
        });
        pw.innerHTML = html;
    }
}, 10);
//# sourceMappingURL=ui.js.map