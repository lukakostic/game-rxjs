import { merge, fromEvent } from 'rxjs';
import { pipe, filter, map } from 'rxjs/operators';
import { VecDir, VecSub, VecAdd, VecMul, VecNormalize } from './Vector.js';
import Game from './Game.js';

export default class InputManager{
    constructor(){
        this._keys = {};
        this._tickKeys = [{},{}];
        this._mouse_keys = {};
        this._mouse_tickKeys = [{},{}];
        this._tickIdx = 0;
        this.mouse = {x:0,y:0};

        this.MouseMoveUpdate$ = fromEvent(document, 'mousemove');
        this.MouseMoveUpdate$.subscribe(event => {
            this.mouse.x = event.clientX;
            this.mouse.y = event.clientY;
        });

        this.MouseKeyUpdate$ = merge( //observer na promenu key (gore il dole)        
            fromEvent(document, 'mousedown').pipe(
                //filter(event => [0, 1, 2].includes(event.button)), 
                map(event => this.procMouseKey(event.button, 1)),
            ),
            fromEvent(document, 'mouseup').pipe(
                //filter(event => [0, 1, 2].includes(event.button),
                map(event => this.procMouseKey(event.button, 0)),
            )
        );
        this.MouseKeyUpdate$.subscribe();
        
        this.KeyUpdate$ = merge( //observer na promenu key (gore il dole)
                fromEvent(document, 'keydown').pipe(
                    filter(event => !event.repeat), //ako drzimo dole ignorisati
                    map(event => this.procKey(event.key.toLocaleLowerCase(),1)),
                ),
                fromEvent(document, 'keyup').pipe(
                    map(event => this.procKey(event.key.toLocaleLowerCase(),0)),
                )
            );
        this.KeyUpdate$.subscribe();
    }
    tick(){
        this._tickIdx=((++this._tickIdx)%2);
        this._tickKeys[this._tickIdx] = {};
        this._mouse_tickKeys[this._tickIdx] = {};
    }
    procKey(key,newState){
        if(newState===undefined) return;
        this._keys[key] = newState;
        this._tickKeys[this._tickIdx][key] = newState;
        //console.log(key,newState);
        return {key:key,state:newState};
    }
    procMouseKey(key,newState){
        if(newState===undefined) return;
        this._mouse_keys[key] = newState;
        this._mouse_tickKeys[this._tickIdx][key] = newState;
        //console.log(key,newState);
        return {key:key,state:newState};
    }
    getKey(key){
        return this._keys[key]??0;
    }
    subKey(key,state,fn){
        return this.KeyUpdate$.pipe(filter(e=>e.key==key&&(state===null?true:e.state==state))).subscribe(fn);
    }
    getMouseWorld(){
        return VecAdd(Game.Input.mouse,Game.cameraOffset);
    }
    getMouseKey(key){
        return this._mouse_keys[key]??0;
    }
    subMouseKey(key,state,fn){
        return this.MouseKeyUpdate$.pipe(filter(e=>e.key==key&&(state===null?true:e.state==state))).subscribe(fn);
    }
}