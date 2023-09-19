import { mergeMap, groupBy, catchError, filter, startWith, debounceTime, delay, fromEvent, switchMap, interval, merge, of, map, scan, throttleTime, tap, Subject, endWith } from 'rxjs';
//import { catchError } from 'rxjs/operators';
import { weapons } from './GameData';
import { levels } from './GameData';
import { Game } from './_Game';
const powerup = (type, value) => ({ type, value });
const hurt = (value, type = 'dmg') => ({ type, value });
const hurtT = { dmg: 'dmg', poison: 'poison' };
let invincibilityP = powerup('invincible', 10.0);
export let playerHurt$ = new Subject();
export let enemyHurt$ = new Subject();
// export let playerHurt2$ = new Subject<{value:any}>();
// export let enemyHurt2$ = new Subject<{enemy:any,value:any}>();
export let playerCollect$ = new Subject();
export let GEvent = {};
export function makeGameEvents() {
    const clicks$ = fromEvent(document, 'mousedown').pipe(map((x) => ({ n: 'click', e: x })));
    const keys$ = fromEvent(document, 'keydown').pipe(map((x) => ({ n: 'key', e: x })));
    const keysOnce$ = fromEvent(document, 'keydown').pipe(filter(e => e.repeat), map((x) => ({ n: 'key1', e: x })));
    let gameEvents;
    gameEvents = merge(
    ///////////////////////////////// Weapon fire
    ///////////////////////// Weapon Switch
    keys$.pipe(filter(e => !e.e.ctrlKey && /^\d$/.test(e.e.key)), map(e => parseInt(e.e.key)), //get weapon key
    filter(e => weapons[e]), tap(e => Game.curWeapon = e), map(e => ({ type: 'weaponSwitch', value: e })))
        .pipe(map(x => x.value), startWith(levels[Game.curLevel].initialWeapon), //starting weapon
    tap((x) => console.log("weapon switch:" + x)), switchMap((weapon) => //pucaj trenutno oruzije
     
    ///////////////////////// Shoot signal
    merge(keys$, clicks$, interval(1)).pipe(filter((e) => {
        let down = Game.Input?.getKey(' ') || Game.Input?.getMouseKey(0);
        let isFirstClick = (e?.e?.button == 0) || (e?.e?.key == ' ' && e.e.repeat === false);
        return down && (isFirstClick || weapons[weapon].automatic);
    }), throttleTime(weapons[weapon].cooldown / Game.timeScale), map(e => ({ type: 'shootSignal' })))
        // gameEvents.pipe( filter(e=>e.type=='shootSignal'),map(x=>x.value))
        .pipe(map(() => ({ type: 'fireWeapon', weapon }))))), 
    //switchMap((e) => interval(repeatTime).pipe(map(i=>2),scan((acc,j)=>acc+j),map(x=>e.n+x)))
    ///////////////// Damage indicator
    merge(playerHurt$.pipe(map(obj => {
        Game.player.powerups.forEach(p => {
            if (p.name == "Shield")
                obj.value *= 0.8;
        });
        return obj;
    }), map((v) => ({ enemy: Game.player, ...v }))), enemyHurt$)
        .pipe(groupBy((i) => i.enemy /*i.id*/, {
        duration: (group) => group.pipe(debounceTime(1500)),
    }), mergeMap((group) => group.pipe(scan((acc, curr) => {
        return { enemy: curr.enemy, value: acc.value + curr.value };
    }, { enemy: null, value: 0 }), endWith(({ enemy: group.key, value: null })))), map((obj) => ({ type: "dmgPopup", entity: obj.enemy, value: obj.value }))), 
    ///////////////////////// Level Switch
    keys$.pipe(filter(e => e.e.ctrlKey && /^\d$/.test(e.e.key)), map(e => parseInt(e.e.key)), filter(e => levels[e]), map(e => ({ type: 'levelSwitch', value: e }))), 
    ///////////////////////// Weapon Switch
    keys$.pipe(filter(e => !e.e.ctrlKey && /^\d$/.test(e.e.key)), map(e => parseInt(e.e.key)), filter(e => weapons[e]), delay(10), map(e => ({ type: 'weaponSwitch', value: e }))), 
    ///////////////////////// Restart level
    keys$.pipe(filter(e => e.e.key == 'r'), map(e => ({ type: 'restart' })))).pipe(catchError(e => {
        console.log('error ', e);
        return merge(of({ type: 'error', error: e }), makeGameEvents());
    }));
    return gameEvents;
}
export function sub(events, type, fn) {
    return events.pipe(filter(e => e.type == type)).subscribe(x => fn(x));
}
//# sourceMappingURL=__GameLogic.js.map