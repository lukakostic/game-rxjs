import { merge, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Game } from './_Game';
export default class InputManager {
    constructor(_keys = {}, _tickKeys = [{}, {}], _mouse_keys = {}, _mouse_tickKeys = [{}, {}], _tickIdx = 0, mouse = { x: 0, y: 0 }, mouse01 = { x: 0, y: 0 }, mouseW = { x: 0, y: 0 }, MouseMoveUpdate$ = null, MouseKeyUpdate$ = null, KeyUpdate$ = null) {
        this._keys = _keys;
        this._tickKeys = _tickKeys;
        this._mouse_keys = _mouse_keys;
        this._mouse_tickKeys = _mouse_tickKeys;
        this._tickIdx = _tickIdx;
        this.mouse = mouse;
        this.mouse01 = mouse01;
        this.mouseW = mouseW;
        this.MouseMoveUpdate$ = MouseMoveUpdate$;
        this.MouseKeyUpdate$ = MouseKeyUpdate$;
        this.KeyUpdate$ = KeyUpdate$;
        this.MouseKeyUpdate$ = merge(fromEvent(document, 'mousedown').pipe(map(e => this.procMouseKey(e.button, 1, e.clientX, e.clientY))), fromEvent(document, 'mouseup').pipe(map(e => this.procMouseKey(e.button, 0, e.clientX, e.clientY))));
        this.MouseMoveUpdate$ = merge(this.MouseKeyUpdate$, merge(fromEvent(document, 'mousemove'), fromEvent(document, 'mouseenter'), fromEvent(document, 'mouseleave'), fromEvent(document, 'mouseout'))
            .pipe(map(e => ({ x: e.clientX, y: e.clientY }))))
            .pipe(map(e => ({ x: e.x, y: e.y })));
        this.KeyUpdate$ = merge(fromEvent(document, 'keydown').pipe(filter(event => !event.repeat), //////****
        map(event => this.procKey(event.key.toLocaleLowerCase(), 1, event.repeated))), fromEvent(document, 'keyup').pipe(map(event => this.procKey(event.key.toLocaleLowerCase(), 0, false))));
        this.MouseKeyUpdate$.subscribe();
        this.MouseMoveUpdate$.subscribe(e => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
            this.mouse01.x = e.x / window.innerWidth;
            this.mouse01.y = e.y / window.innerHeight;
            this.calcMouseW();
        });
        this.KeyUpdate$.subscribe();
    }
    calcMouseW() {
        this.mouseW.x = (this.mouse01.x - 0.5) * window.innerWidth;
        this.mouseW.y = (this.mouse01.y - 0.5) * window.innerHeight;
        if (Game.player) {
            this.mouseW.x += Game.player.position.x;
            this.mouseW.y += Game.player.position.y;
        }
    }
    tick() {
        this._tickIdx = ((++this._tickIdx) % 2);
        this._tickKeys[this._tickIdx] = {};
        this._mouse_tickKeys[this._tickIdx] = {};
        this.calcMouseW();
    }
    procKey(key, newState, repeated) {
        if (newState === undefined)
            return;
        this._keys[key] = newState;
        this._tickKeys[this._tickIdx][key] = newState;
        return { key: key, state: newState, repeated: repeated ?? false };
    }
    procMouseKey(key, newState, x, y) {
        if (newState === undefined)
            return;
        this._mouse_keys[key] = newState;
        this._mouse_tickKeys[this._tickIdx][key] = newState;
        return { key: key, state: newState, x, y };
    }
    getKey(key) {
        return this._keys[key] ?? 0;
    }
    subKey(key, state, fn) {
        return this.KeyUpdate$.pipe(filter(e => e.key == key && (state === null ? true : e.state == state))).subscribe(fn);
    }
    getMouseKey(key) {
        return this._mouse_keys[key] ?? 0;
    }
    subMouseKey(key, state, fn) {
        return this.MouseKeyUpdate$.pipe(filter(e => e.key == key && (state === null ? true : e.state == state))).subscribe(fn);
    }
}
//# sourceMappingURL=_InputManager.js.map
//# sourceMappingURL=_InputManager.js.map