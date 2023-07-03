import Game from './Game';
import GameObject from './GameObject';
export default class Powerup extends GameObject {
    constructor() {
        super();
        this.value = "Powerup";
        this.name = 'powerup';
        this.value = "Powerup";
        this.size = { x: 20, y: 20 };
        this.color = 'lime';
        Game.player.powerupsWorld.push(this);
    }
    Destroy() {
        const index = Game.player.powerupsWorld.indexOf(this);
        if (index > -1) { // only splice array when item is found
            Game.player.powerupsWorld.splice(index, 1); // 2nd parameter means remove one item only
        }
        return super.Destroy();
    }
}
//# sourceMappingURL=Powerup.js.map