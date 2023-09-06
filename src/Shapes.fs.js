import { Record } from "../fable_modules/fable-library.4.1.4/Types.js";
import { Vec3_$reflection } from "./Vectors/Vec3F64.fs.js";
import { float64_type, record_type } from "../fable_modules/fable-library.4.1.4/Reflection.js";
import { Vec3_$ctor_Z7AD9E565 } from "./Vectors/./Vec3F64.fs.js";

export class Ray extends Record {
    constructor(origin, direction) {
        super();
        this.origin = origin;
        this.direction = direction;
    }
}

export function Ray_$reflection() {
    return record_type("Shapes.Ray", [], Ray, () => [["origin", Vec3_$reflection()], ["direction", Vec3_$reflection()]]);
}

export function Ray__at_5E38073B(r, t) {
    const a_5 = r.origin;
    let b_2;
    const a_1 = r.direction;
    const b_1 = t;
    const x = a_1.vec[0] * b_1;
    const y = a_1.vec[1] * b_1;
    const z = a_1.vec[2] * b_1;
    b_2 = Vec3_$ctor_Z7AD9E565(x, y, z);
    const x_1 = a_5.vec[0] + b_2.vec[0];
    const y_1 = a_5.vec[1] + b_2.vec[1];
    const z_1 = a_5.vec[2] + b_2.vec[2];
    return Vec3_$ctor_Z7AD9E565(x_1, y_1, z_1);
}

export class Sphere extends Record {
    constructor(center, radius) {
        super();
        this.center = center;
        this.radius = radius;
    }
}

export function Sphere_$reflection() {
    return record_type("Shapes.Sphere", [], Sphere, () => [["center", Vec3_$reflection()], ["radius", float64_type]]);
}

export function intersectRaySphere(ray, sphere) {
    let a_23, a_24, b_3;
    let oc;
    const a = ray.origin;
    const b = sphere.center;
    const x = a.vec[0] - b.vec[0];
    const y = a.vec[1] - b.vec[1];
    const z = a.vec[2] - b.vec[2];
    oc = Vec3_$ctor_Z7AD9E565(x, y, z);
    let a_15;
    const a_7 = ray.direction;
    const a_8 = a_7;
    const b_1 = a_7;
    a_15 = (((a_8.vec[0] * b_1.vec[0]) + (a_8.vec[1] * b_1.vec[1])) + (a_8.vec[2] * b_1.vec[2]));
    let halfB;
    const a_16 = oc;
    const b_2 = ray.direction;
    halfB = (((a_16.vec[0] * b_2.vec[0]) + (a_16.vec[1] * b_2.vec[1])) + (a_16.vec[2] * b_2.vec[2]));
    const c = ((a_23 = oc, (a_24 = a_23, (b_3 = a_23, ((a_24.vec[0] * b_3.vec[0]) + (a_24.vec[1] * b_3.vec[1])) + (a_24.vec[2] * b_3.vec[2]))))) - (sphere.radius * sphere.radius);
    const discriminant = (halfB * halfB) - (a_15 * c);
    if (discriminant < 0) {
        return -1;
    }
    else {
        return (-halfB - Math.sqrt(discriminant)) / a_15;
    }
}

