export function Vector(x,y){
    return {x,y};
}

export function VecNormalize(x, y) {
    if(typeof x != 'number') [x,y] = [x.x,x.y];
    let length = Math.sqrt(x * x + y * y);
    if (length === 0) {
        return {x: 0, y: 0};
    } else {
        return {x: x / length, y: y / length};
    }
}

export function VecDist(vec1, vec2) {
    let dx = vec2.x - vec1.x;
    let dy = vec2.y - vec1.y;
    return Math.sqrt(dx * dx + dy * dy);
}

export function VecDir(from, to) {
    let direction = Vector(to.x - from.x, to.y - from.y);
    return VecNormalize(direction);
}

export function VecAdd(vec1, vec2) {
    return Vector(vec1.x + vec2.x, vec1.y + vec2.y);
}

export function VecSub(vec1, vec2) {
    return Vector(vec1.x - vec2.x, vec1.y - vec2.y);
}

export function VecMul(vec, scalar) {
    return Vector(vec.x * scalar, vec.y * scalar);
}
