import Enemy from "./_Enemy";
import { Game } from "./_Game";
export let weapons = {
    1: {
        cooldown: 300,
        automatic: true,
        damage: 25,
        inaccuracy: 0.05,
        color: 'cyan'
    },
    2: {
        cooldown: 130,
        automatic: false,
        damage: 10,
        inaccuracy: 0,
        color: 'yellow'
    },
    3: {
        cooldown: 120,
        automatic: true,
        damage: 5,
        inaccuracy: 0.2,
        color: 'magenta'
    }
};
export let powerups = {
    0: {
        powName: "Shield",
        description: "Blocks 20% of damage",
        value: 5,
    },
    1: {
        powName: "Invincible",
        description: "Activates on first damage, invincible for time",
        value: 2,
    },
    2: {
        powName: "Big BOOLETS",
        description: "Big bullet.",
        value: 5,
    },
    3: {
        powName: "Heal",
        description: "Heal 25hp",
        value: -1,
    },
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
            Object.assign(Game.player, {
                position: { x: -600, y: 0 }
            }),
                this.enemies =
                    [
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