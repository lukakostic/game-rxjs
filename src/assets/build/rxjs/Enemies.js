import GameObject from './GameObject';
class Enemy extends GameObject {
    static { this.enemies = []; }
    constructor(parent = null, htmlParent = document.body) {
        super(parent, htmlParent);
    }
}
export default Enemy;
//# sourceMappingURL=Enemies.js.map