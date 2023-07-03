export interface Vector {
    x: number;
    y: number;
}

export function Vector(x: number, y: number): Vector {
    return {x, y};
}

export function VecNormalize(x: number | Vector, y?: number): Vector {
    if (typeof x !== 'number') {
        y = x.y;
        x = x.x;
    }
    let length = Math.sqrt(x * x + (y as number) * (y as number));
    if (length === 0) {
        return {x: 0, y: 0};
    } else {
        return {x: x / length, y: y as number / length};
    }
}

export function VecDist(vec1: Vector, vec2: Vector): number {
    let dx = vec2.x - vec1.x;
    let dy = vec2.y - vec1.y;
    return Math.sqrt(dx * dx + dy * dy);
}

export function VecDir(from: Vector, to: Vector): Vector {
    let direction = Vector(to.x - from.x, to.y - from.y);
    return VecNormalize(direction);
}

export function VecAdd(vec1: Vector, vec2: Vector): Vector {
    return Vector(vec1.x + vec2.x, vec1.y + vec2.y);
}

export function VecSub(vec1: Vector, vec2: Vector): Vector {
    return Vector(vec1.x - vec2.x, vec1.y - vec2.y);
}

export function VecMul(vec: Vector, scalar: number): Vector {
    return Vector(vec.x * scalar, vec.y * scalar);
}
