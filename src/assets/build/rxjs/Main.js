import Game from './Game';
import GameObject from './GameObject';
import { VecDir } from './Vector';
import Bullet from './Bullet';
import Player from './Player';
new Game();
window['Game'] = Game;
window['appComponent'].game = Game;
let sceneSize = [1300, 900];
Game.sceneExtents.x = -sceneSize[0] / 2;
Game.sceneExtents.y = -sceneSize[1] / 2;
Game.cameraOffset.x = -sceneSize[0] / 2;
Game.cameraOffset.y = -sceneSize[1] / 2;
Game.sceneExtents.xSize = sceneSize[0];
Game.sceneExtents.ySize = sceneSize[1];
window['scene'] = new GameObject();
Object.assign(window['scene'], { position: { x: 0, y: 0 }, collider: false, size: { x: Game.sceneExtents.xSize, y: Game.sceneExtents.ySize }, centered: true, color: 'black' });
let enemies = [];
window['appComponent'].enemies = enemies;
window['player'] = new Player();
Game.player = player;
window['appComponent'].player = player;
let shoot = (ev) => {
    let b = Bullet.shoot(player.position, VecDir(player.position, Game.Input.getMouseWorld()), 0);
    b.color = 'yellow';
};
Game.Input.subMouseKey(0, 1, shoot);
Game.Input.subKey(' ', 1, shoot);
Game.Input.subKey(' ', 1, () => {
    Game.timeScale = ((Game.timeScale > 0.99) ? 0.4 : 1.0);
});
Game.ticks$.subscribe(function () {
    let cols = Game.CheckCollisions(Bullet.bulletPool, [player, ...enemies]);
    for (var i = 0; i < cols.length; i++)
        if (cols[i][1] == player) {
            if (cols[i][0].type === 1) {
                cols[i][0].Disable();
                player.hp -= 25;
                if (player.hp < 0 && player.hp > -40) {
                    window['appComponent'].openDialog();
                }
                window['appComponent'].rerender();
                console.log('player dmg ', player.hp);
            }
        }
        else {
            if (cols[i][0].type === 0) {
                cols[i][0].Disable();
                cols[i][1].hp -= 25;
            }
        }
});
//# sourceMappingURL=Main.js.map