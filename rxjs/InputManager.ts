import { merge, fromEvent, Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { VecAdd } from './Vector';
import Game from './Game';

interface MouseEvent {
    button: number;
    clientX: number;
    clientY: number;
}

interface KeyboardEvent {
    key: string;
    repeat: boolean;
}

export default class InputManager {
    private _keys: { [key: string]: number };
    private _tickKeys: Array<{ [key: string]: number }>;
    private _mouse_keys: { [key: number]: number };
    private _mouse_tickKeys: Array<{ [key: number]: number }>;
    private _tickIdx: number;
    public mouse: { x: number, y: number };
    private MouseMoveUpdate$: Observable<MouseEvent>;
    private MouseKeyUpdate$: Observable<{key: number, state: number}>;
    private KeyUpdate$: Observable<{key: string, state: number}>;

    constructor() {
        this._keys = {};
        this._tickKeys = [{}, {}];
        this._mouse_keys = {};
        this._mouse_tickKeys = [{}, {}];
        this._tickIdx = 0;
        this.mouse = { x: 0, y: 0 };

        this.MouseMoveUpdate$ = fromEvent<MouseEvent>(document, 'mousemove');
        this.MouseMoveUpdate$.subscribe(event => {
            this.mouse.x = event.clientX;
            this.mouse.y = event.clientY;
        });

        this.MouseKeyUpdate$ = merge(
            fromEvent<MouseEvent>(document, 'mousedown').pipe(
                map(event => this.procMouseKey(event.button, 1))
            ),
            fromEvent<MouseEvent>(document, 'mouseup').pipe(
                map(event => this.procMouseKey(event.button, 0))
            )
        );
        this.MouseKeyUpdate$.subscribe();

        this.KeyUpdate$ = merge(
            fromEvent<KeyboardEvent>(document, 'keydown').pipe(
                filter(event => !event.repeat),
                map(event => this.procKey(event.key.toLocaleLowerCase(), 1))
            ),
            fromEvent<KeyboardEvent>(document, 'keyup').pipe(
                map(event => this.procKey(event.key.toLocaleLowerCase(), 0))
            )
        );
        this.KeyUpdate$.subscribe();
    }

    tick() {
        this._tickIdx = ((++this._tickIdx) % 2);
        this._tickKeys[this._tickIdx] = {};
        this._mouse_tickKeys[this._tickIdx] = {};
    }

    procKey(key: string, newState: number) {
        if (newState === undefined) return;
        this._keys[key] = newState;
        this._tickKeys[this._tickIdx][key] = newState;
        return { key: key, state: newState };
    }

    procMouseKey(key: number, newState: number) {
        if (newState === undefined) return;
        this._mouse_keys[key] = newState;
        this._mouse_tickKeys[this._tickIdx][key] = newState;
        return { key: key, state: newState };
    }

    getKey(key: string) {
        return this._keys[key] ?? 0;
    }

    subKey(key: string, state: number|null, fn: (value: {key: string, state: number}) => void) {
        return this.KeyUpdate$.pipe(filter(e => e.key == key && (state === null ? true : e.state == state))).subscribe(fn);
    }

    getMouseWorld() {
        return VecAdd(this.mouse, Game.cameraOffset);
    }

    getMouseKey(key: number) {
        return this._mouse_keys[key] ?? 0;
    }

    subMouseKey(key: number, state: number|null, fn: (value: {key: number, state: number}) => void) {
        return this.MouseKeyUpdate$.pipe(filter(e => e.key == key && (state === null ? true : e.state == state))).subscribe(fn);
    }
}
