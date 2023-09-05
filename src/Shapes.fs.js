import { Record } from "../fable_modules/fable-library.4.1.4/Types.js";
import { Vec3_$ctor_Z7AD9E565, Vec3_$reflection } from "./Vectors.fs.js";
import { record_type } from "../fable_modules/fable-library.4.1.4/Reflection.js";

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

