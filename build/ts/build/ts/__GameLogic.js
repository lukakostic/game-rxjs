import { catchError, filter, startWith, delay, fromEvent, switchMap, interval, merge, of, map, throttleTime, tap } from 'rxjs';
//import { catchError } from 'rxjs/operators';
import { weapons } from './Levels';
import { levels } from './Levels';
import { Game } from './_Game';
const powerup = (type, value) => ({ type, value });
const hurt = (value, type = 'dmg') => ({ type, value });
const hurtT = { dmg: 'dmg', poison: 'poison' };
let invincibilityP = powerup('invincible', 10.0);
export function makeGameEvents(document) {
    const clicks$ = fromEvent(document, 'click').pipe(map((x) => ({ n: 'click', e: x })));
    const keys$ = fromEvent(document, 'keydown').pipe(map((x) => ({ n: 'key', e: x })));
    const keysOnce$ = fromEvent(document, 'keydown').pipe(filter(e => e.repeat), map((x) => ({ n: 'key1', e: x })));
    let gameEvents;
    gameEvents = merge(
    ///////////////////////// Weapon fire
    ///////////////////////// Weapon Switch
    keys$.pipe(filter(e => !e.e.ctrlKey && /^\d$/.test(e.e.key)), map(e => parseInt(e.e.key)), //get weapon key
    filter(e => weapons[e]), map(e => ({ type: 'weaponSwitch', value: e }))).pipe(map(x => x.value), startWith(levels[Game.curLevel].initialWeapon), //starting weapon
    tap((x) => console.log("weapon switch:" + x)), switchMap((weapon) => //pucaj trenutno oruzije
     
    ///////////////////////// Shoot signal
    merge(keys$, clicks$, interval(1)).pipe(filter((e) => {
        if (typeof e == 'number' || e?.e?.key) {
            if (weapons[weapon].automatic)
                if (Game.Input?.getKey(' ') == 1)
                    return true;
            if (typeof e == 'number')
                return false;
            if (weapons[weapon].automatic) {
                return e?.e?.key == ' ';
            }
            else if (typeof e != 'number') {
                return e?.e?.key == ' ' && !e.e.repeated;
            }
        }
        return e.e.button == 0;
    }), throttleTime(weapons[weapon].cooldown * Game.timeScale), map(e => ({ type: 'shootSignal' })))
        // gameEvents.pipe( filter(e=>e.type=='shootSignal'),map(x=>x.value))
        .pipe(map(() => ({ type: 'fireWeapon', weapon }))))), 
    //switchMap((e) => interval(repeatTime).pipe(map(i=>2),scan((acc,j)=>acc+j),map(x=>e.n+x)))
    ///////////////////////// Level Switch
    keys$.pipe(filter(e => e.e.ctrlKey && /^\d$/.test(e.e.key)), map(e => parseInt(e.e.key)), filter(e => levels[e]), map(e => ({ type: 'levelSwitch', value: e }))), 
    ///////////////////////// Weapon Switch
    keys$.pipe(filter(e => !e.e.ctrlKey && /^\d$/.test(e.e.key)), map(e => parseInt(e.e.key)), filter(e => weapons[e]), delay(10), map(e => ({ type: 'weaponSwitch', value: e }))), 
    /*
  merge(
  )
  .pipe(
    startWith(null), pairwise(),
    filter((x) => x[1].type == 'weaponSwitch'),
    map((x) => x[x[0]?.type == 'levelSwitch' ? 0 : 1]),
  ),*/
    ///////////////////////// Restart level
    keys$.pipe(filter(e => e.e.key == ']'), map(e => ({ type: 'restart' })))).pipe(catchError(e => {
        console.log('error ', e);
        return merge(of({ type: 'error', error: e }), makeGameEvents(document));
    }));
    return gameEvents;
}
export function sub(ev, type, fn) {
    console.log("sub", ev);
    return ev.pipe(filter(e => e.type == type)).subscribe(x => fn(x));
}
//# sourceMappingURL=__GameLogic.js.map
//# sourceMappingURL=__GameLogic.js.map