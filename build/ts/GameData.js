import Enemy from "./_Enemy";
import { Game } from "./_Game";
import { playerHurt$ } from './__GameLogic';
export let weapons = {
    1: {
        cooldown: 300,
        automatic: true,
        damage: 25,
        inaccuracy: 0,
        color: 'cyan'
    },
    2: {
        cooldown: 130,
        automatic: false,
        damage: 15,
        inaccuracy: 0,
        color: 'yellow'
    },
    3: {
        cooldown: 120,
        automatic: true,
        damage: 9,
        inaccuracy: 0.15,
        color: 'magenta'
    }
};
export let powerups = [
    {
        powName: "Shield",
        symbol: "S",
        description: "Blocks 20% of damage",
        color: 'lightblue',
        value: 7,
        fn: function () {
            Game.player.powerups.push({ name: this.powName, value: this.value, data: this });
        }
    },
    {
        powName: "Damage",
        symbol: "D",
        description: "Increase damage 20%",
        color: 'gold',
        value: 4,
        fn: function () {
            Game.player.powerups.push({ name: this.powName, value: this.value, data: this });
        }
    },
    {
        powName: "Heal",
        symbol: "H",
        description: "Heal 25hp",
        color: 'lime',
        value: -1,
        fn: () => {
            playerHurt$.next({ value: -30 });
            //Game.player.hp+=30;
            //if(Game.player.hp>100) Game.player.hp = 100;
        }
    },
    {
        powName: "Hurt",
        symbol: "E",
        description: "Hurt 15hp",
        color: 'red',
        value: -1,
        fn: () => {
            playerHurt$.next({ value: 20 });
            //Game.player.hp-=20;
            //if(Game.player.hp100) Game.player.hp = 100;
        }
    },
];
export let levels = {
    0: {
        initialWeapon: 1,
        load() {
            this.enemies = [];
        }
    },
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
            // Object.assign(Game.player,{
            //   position:{x:-600,y:0}
            // })
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
    },
    4: {
        initialWeapon: 1,
        load() {
            // Object.assign(Game.player,{
            //   position:{x:-400,y:-400}
            // })
            this.enemies =
                [
                    Object.assign(new Enemy(true), {
                        position: { x: 500, y: 0 },
                        size: { x: 80, y: 80 },
                        color: 'hotpink',
                        hp: 500,
                        boss: true
                    }),
                    Object.assign(new Enemy(true), {
                        position: { x: -500, y: 0 },
                        size: { x: 80, y: 80 },
                        color: 'hotpink',
                        hp: 500,
                        boss: true
                    }),
                ];
        }
    },
};
//# sourceMappingURL=GameData.js.map