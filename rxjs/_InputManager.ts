import { merge, tap, fromEvent, Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { VecAdd, VecMul, Vector } from './Vector';
import { Game } from './_Game';

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
    
    constructor(
        private _keys: { [key: string]: number } = {},
        private _tickKeys: Array<{ [key: string]: number }> = [{}, {}],
        private _mouse_keys: { [key: number]: number } = {},
        private _mouse_tickKeys: Array<{ [key: number]: number }> = [{}, {}],
        private _tickIdx: number = 0,

        public mouse: Vector  = { x: 0, y: 0 },
        public mouse01: Vector  = { x: 0, y: 0 },
        public mouseW: Vector  = { x: 0, y: 0 },
        
        public MouseMoveUpdate$: Observable<{x:number,y:number}> = null,
        public MouseKeyUpdate$: Observable<{key: number, state: number,x:number,y:number}> = null,
        public KeyUpdate$: Observable<{key: string, state: number}> = null,
    ) {
        
        this.MouseKeyUpdate$ = merge(
            fromEvent<MouseEvent>(document, 'mousedown').pipe(
                map(e=> 
                    this.procMouseKey(e.button, 1, e.clientX, e.clientY)
                )),
            fromEvent<MouseEvent>(document, 'mouseup').pipe(
                map(e=> 
                    this.procMouseKey(e.button, 0, e.clientX, e.clientY)
                ))
        );

        this.MouseMoveUpdate$ = merge(
                this.MouseKeyUpdate$,
                merge(
                    fromEvent<MouseEvent>(document, 'mousemove'),
                    fromEvent<MouseEvent>(document, 'mouseenter'),
                    fromEvent<MouseEvent>(document, 'mouseleave'),
                    fromEvent<MouseEvent>(document, 'mouseout')
                )
                .pipe( map(e=>({x:e.clientX,y:e.clientY})) )
            )
            .pipe( map(e=>({x:e.x,y:e.y})) );
        

        this.KeyUpdate$ = merge(
            fromEvent<KeyboardEvent>(document, 'keydown').pipe(
                filter(event => !event.repeat), //////****
                map(event => 
                    this.procKey(event.key.toLocaleLowerCase(), 1, (event as any).repeated)
                    )
            ),
            fromEvent<KeyboardEvent>(document, 'keyup').pipe(
                map(event => this.procKey(event.key.toLocaleLowerCase(), 0, false))
            )
        );
        

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

    calcMouseW(){
        this.mouseW.x = (this.mouse01.x - 0.5) *window.innerWidth;
        this.mouseW.y =  (this.mouse01.y - 0.5) *window.innerHeight;
        if(Game.player){
            this.mouseW.x+=Game.player.position.x;
            this.mouseW.y+=Game.player.position.y;
        }
    }
    tick() {
        this._tickIdx = ((++this._tickIdx) % 2);
        this._tickKeys[this._tickIdx] = {};
        this._mouse_tickKeys[this._tickIdx] = {};
        this.calcMouseW();
    }

    procKey(key: string, newState: number, repeated?:boolean) {
        if (newState === undefined) return;
        this._keys[key] = newState;
        this._tickKeys[this._tickIdx][key] = newState;
        return { key: key, state: newState, repeated: repeated??false  };
    }

    procMouseKey(key: number, newState: number, x:number,y:number) {
        if (newState === undefined) return;
        this._mouse_keys[key] = newState;
        this._mouse_tickKeys[this._tickIdx][key] = newState;
        return { key: key, state: newState, x,y };
    }

    getKey(key: string) {
        return this._keys[key] ?? 0;
    }

    
    subKey(key: string, state: number|null, fn: (value: {key: string, state: number}) => void) {
        return this.KeyUpdate$.pipe(
            filter(e => e.key == key && (state === null ? true : e.state == state))
        ).subscribe(fn);
    }

    getMouseKey(key: number) {
        return this._mouse_keys[key] ?? 0;
    }

    subMouseKey(key: number, state: number|null, fn: (value: {key: number, state: number}) => void) {
        return this.MouseKeyUpdate$.pipe(
            filter(e => e.key == key && (state === null ? true : e.state == state)
        )).subscribe(fn);
    }
}
