import { Subject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Game } from './_Game';
import { Vector } from './Vector';

export default class GameObject{
    enabled: boolean;
    name: string;
    collider: boolean;
    parent: GameObject | null;
    position: {x: number, y: number};
    size: {x: number, y: number};
    centered: boolean;
    boundByScene: boolean;
    rotation: number;
    color: string;
    el: HTMLDivElement;
    htmlParent: HTMLElement;
    Tick: Subject<number>;
    PreRender: Subject<number>;
    Render: Subject<number>;
    CollidedSceneEdge: Subject<void>;
    _tickSub: Subscription;
    innerHTML:any = null;
    customStyle : string|null;

    constructor(parent: GameObject | null = null, htmlParent?: HTMLElement){
        this.enabled = true;

        this.name = "";
        this.collider = true;
        this.parent = parent??null;
        this.position = Vector(0,0);
        this.size = Vector(50,50);
        this.centered = true;
        this.boundByScene = true;
        this.rotation = 0;
        this.color = 'red';
        this.el = document.createElement('div');
        this.htmlParent = htmlParent ?? Game.canvas;
        this.htmlParent.append(this.el);
        this.customStyle = null;
        this.innerHTML = null;

        this.Tick = new Subject<number>();
        this.PreRender = new Subject<number>();
        this.Render = new Subject<number>();
        this.CollidedSceneEdge = new Subject<void>();

        this._tickSub = Game.ticks$?.pipe(tap(deltaTime => {
            if(this.enabled==false) return;
        
            if(this.boundByScene) this.BoundByScene();
            this.Tick.next(deltaTime);
            this.PreRender.next(deltaTime);
            this.RenderMethod(deltaTime);
            this.Render.next(deltaTime);
        }))?.subscribe();

        Game.gameObjects.push(this);
    }
    Disable(): void{
        this.enabled = false;
        this.el.style.cssText = '';
    }
    Destroy(): null {
        this._tickSub.unsubscribe();
        this.enabled = false;
        
        const index = Game.gameObjects.indexOf(this);
        if (index > -1) { // only splice array when item is found
            Game.gameObjects.splice(index, 1); // 2nd parameter means remove one item only
        }

        this.htmlParent.removeChild(this.el);
        this.el.outerHTML = "";
        this.el = null;
        this.htmlParent = null;
        return null;
    }

    BoundByScene(): void{
        let pos = {...this.position};
        if (this.centered) {
            let halfXSize = this.size.x / 2;
            let halfYSize = this.size.y / 2;
            
            if (this.position.x - halfXSize < Game.sceneExtents.x)
                this.position.x = Game.sceneExtents.x + halfXSize;
            else if (this.position.x + halfXSize > Game.sceneExtents.x + Game.sceneExtents.xSize)
                this.position.x = Game.sceneExtents.x + Game.sceneExtents.xSize - halfXSize;
            
            if (this.position.y - halfYSize < Game.sceneExtents.y)
                this.position.y = Game.sceneExtents.y + halfYSize;
            else if (this.position.y + halfYSize > Game.sceneExtents.y + Game.sceneExtents.ySize)
                this.position.y = Game.sceneExtents.y + Game.sceneExtents.ySize - halfYSize;
        }
        else {
            if (this.position.x < Game.sceneExtents.x)
                this.position.x = Game.sceneExtents.x;
            else if (this.position.x + this.size.x > Game.sceneExtents.x + Game.sceneExtents.xSize)
                this.position.x = Game.sceneExtents.x + Game.sceneExtents.xSize - this.size.x;
            
            if (this.position.y < Game.sceneExtents.y)
                this.position.y = Game.sceneExtents.y;
            else if (this.position.y + this.size.y > Game.sceneExtents.y + Game.sceneExtents.ySize)
                this.position.y = Game.sceneExtents.y + Game.sceneExtents.ySize - this.size.y;
        }
        if(pos.x != this.position.x || pos.y != this.position.y) this.CollidedSceneEdge.next();
    }

    RenderMethod(deltaTime: number): void{
        if(this.enabled==false){
            this.el.style.cssText = '';
            return;
        }
        let x = this.position.x/*-Game.cameraOffset.x*/-Game.cameraPos.x+Game.viewportCenter.x;
        let y = this.position.y/*-Game.cameraOffset.y*/-Game.cameraPos.y+Game.viewportCenter.y;
        if(this.centered){ x -= this.size.x/2; y -= this.size.y/2; }
        this.el.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        background-color: ${this.color};
        height: ${this.size.y}px;
        width: ${this.size.x}px;
        z-index:-1;
        ${this.customStyle?this.customStyle:""}
        `.split('\n').join('');
        if(this.innerHTML){
            this.el.innerHTML = this.innerHTML;
        }
    }
}
