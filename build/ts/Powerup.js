import { Game } from './_Game';
import GameObject from './GameObject';
export class Powerup extends GameObject {
    constructor(powerupName, value = null, desc = "", col = null) {
        super();
        this.powName = "Powerup";
        this.description = "";
        this.value = null;
        this.name = 'powerup';
        this.powName = powerupName;
        this.customStyle = "word-wrap: anywhere; text-align: center; color:orange; font-weight:600; overflow: hidden; border-radius: 7px;";
        this.value = value;
        this.description = desc;
        this.size = { x: 30, y: 30 };
        this.color = col || 'lime';
        Game.powerupsWorld.push(this);
    }
    Destroy() {
        const index = Game.powerupsWorld.indexOf(this);
        if (index > -1) {
            Game.powerupsWorld.splice(index, 1);
        }
        return super.Destroy();
    }
}
//# sourceMappingURL=Powerup.js.map