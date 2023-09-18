import Enemy from "./_Enemy";
import { Game } from "./_Game";
export let weapons = {
    1: {
        cooldown: 160,
        automatic: true,
        damage: 10,
        color: 'cyan'
    },
    2: {
        cooldown: 300,
        automatic: false,
        damage: 20,
        color: 'yellow'
    }
};
export let levels = {
    1: {
        initialWeapon: 1,
        load() {
            this.enemies =
                [
                    Object.assign(new Enemy(), {
                        position: { x: -400, y: 400 },
                    }),
                    Object.assign(new Enemy(), {
                        position: { x: 400, y: -400 },
                    })
                ];
        }
    },
    2: {
        initialWeapon: 1,
        load() {
            this.enemies =
                [
                    Object.assign(new Enemy(), {
                        position: { x: -400, y: 400 },
                    }),
                    Object.assign(new Enemy(), {
                        position: { x: 400, y: -400 },
                    }),
                    Object.assign(new Enemy(), {
                        position: { x: 400, y: 400 },
                    }),
                    Object.assign(new Enemy(), {
                        position: { x: -400, y: -400 },
                    })
                ];
        }
    },
    3: {
        initialWeapon: 1,
        load() {
            this.enemies =
                [
                    Object.assign(Game.player, {
                        position: { x: -600, y: 0 }
                    }),
                    Object.assign(new Enemy(), {
                        position: { x: 700, y: 400 },
                    }),
                    Object.assign(new Enemy(), {
                        position: { x: 700, y: 100 },
                    }),
                    Object.assign(new Enemy(), {
                        position: { x: 700, y: -100 },
                    }),
                    Object.assign(new Enemy(), {
                        position: { x: 700, y: -400 },
                    })
                ];
        }
    }
};
//# sourceMappingURL=Levels.js.map