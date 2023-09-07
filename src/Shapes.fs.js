import { Union, Record } from "../fable_modules/fable-library.4.1.4/Types.js";
import { Vec3_$reflection } from "./Vectors/Vec3F64.fs.js";
import { class_type, union_type, bool_type, float64_type, record_type } from "../fable_modules/fable-library.4.1.4/Reflection.js";
import { Vec3_$ctor_Z7AD9E565 } from "./Vectors/./Vec3F64.fs.js";
import { disposeSafe, getEnumerator } from "../fable_modules/fable-library.4.1.4/Util.js";

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
    const a_2 = r.origin;
    let b_2;
    const a_1 = r.direction;
    const b_1 = t;
    const x = a_1.vec[0] * b_1;
    const y = a_1.vec[1] * b_1;
    const z = a_1.vec[2] * b_1;
    b_2 = Vec3_$ctor_Z7AD9E565(x, y, z);
    const x_1 = a_2.vec[0] + b_2.vec[0];
    const y_1 = a_2.vec[1] + b_2.vec[1];
    const z_1 = a_2.vec[2] + b_2.vec[2];
    return Vec3_$ctor_Z7AD9E565(x_1, y_1, z_1);
}

export class HitRecord extends Record {
    constructor(t, p, normal, frontFace) {
        super();
        this.t = t;
        this.p = p;
        this.normal = normal;
        this.frontFace = frontFace;
    }
}

export function HitRecord_$reflection() {
    return record_type("Shapes.HitRecord", [], HitRecord, () => [["t", float64_type], ["p", Vec3_$reflection()], ["normal", Vec3_$reflection()], ["frontFace", bool_type]]);
}

export class HitResult extends Union {
    constructor(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["Hit", "Miss"];
    }
}

export function HitResult_$reflection() {
    return union_type("Shapes.HitResult", [], HitResult, () => [[["Item", HitRecord_$reflection()]], []]);
}

export class Sphere extends Record {
    constructor(center, radius) {
        super();
        this.center = center;
        this.radius = radius;
    }
    rayHit(ray, minT, maxT) {
        let a_5, a_6, b_3, a_10, b_7, a_11, x_3, y_3, z_3;
        const s = this;
        let oc;
        const a = ray.origin;
        const b = s.center;
        const x = a.vec[0] - b.vec[0];
        const y = a.vec[1] - b.vec[1];
        const z = a.vec[2] - b.vec[2];
        oc = Vec3_$ctor_Z7AD9E565(x, y, z);
        let a_3;
        const a_1 = ray.direction;
        const a_2 = a_1;
        const b_1 = a_1;
        a_3 = (((a_2.vec[0] * b_1.vec[0]) + (a_2.vec[1] * b_1.vec[1])) + (a_2.vec[2] * b_1.vec[2]));
        let halfB;
        const a_4 = oc;
        const b_2 = ray.direction;
        halfB = (((a_4.vec[0] * b_2.vec[0]) + (a_4.vec[1] * b_2.vec[1])) + (a_4.vec[2] * b_2.vec[2]));
        const c = ((a_5 = oc, (a_6 = a_5, (b_3 = a_5, ((a_6.vec[0] * b_3.vec[0]) + (a_6.vec[1] * b_3.vec[1])) + (a_6.vec[2] * b_3.vec[2]))))) - (s.radius * s.radius);
        const discriminant = (halfB * halfB) - (a_3 * c);
        if (discriminant < 0) {
            return new HitResult(1, []);
        }
        else {
            const sqrtD = Math.sqrt(discriminant);
            let t = (-halfB - sqrtD) / a_3;
            if ((t <= minT) ? true : (t > maxT)) {
                t = ((-halfB + sqrtD) / a_3);
                if ((t <= minT) ? true : (t > maxT)) {
                    t = minT;
                }
            }
            if (t === minT) {
                return new HitResult(1, []);
            }
            else {
                const p = Ray__at_5E38073B(ray, t);
                const t_1 = t;
                const p_1 = p;
                let normal;
                let a_9;
                const a_7 = p;
                const b_4 = s.center;
                const x_1 = a_7.vec[0] - b_4.vec[0];
                const y_1 = a_7.vec[1] - b_4.vec[1];
                const z_1 = a_7.vec[2] - b_4.vec[2];
                a_9 = Vec3_$ctor_Z7AD9E565(x_1, y_1, z_1);
                const b_6 = 1 / s.radius;
                const x_2 = a_9.vec[0] * b_6;
                const y_2 = a_9.vec[1] * b_6;
                const z_2 = a_9.vec[2] * b_6;
                normal = Vec3_$ctor_Z7AD9E565(x_2, y_2, z_2);
                const frontFace = ((a_10 = normal, (b_7 = p_1, ((a_10.vec[0] * b_7.vec[0]) + (a_10.vec[1] * b_7.vec[1])) + (a_10.vec[2] * b_7.vec[2])))) < 0;
                return new HitResult(0, [new HitRecord(t_1, p_1, frontFace ? normal : ((a_11 = normal, (x_3 = (a_11.vec[0] * -1), (y_3 = (a_11.vec[1] * -1), (z_3 = (a_11.vec[2] * -1), Vec3_$ctor_Z7AD9E565(x_3, y_3, z_3)))))), frontFace)]);
            }
        }
    }
}

export function Sphere_$reflection() {
    return record_type("Shapes.Sphere", [], Sphere, () => [["center", Vec3_$reflection()], ["radius", float64_type]]);
}

export class HittableList {
    constructor(hs) {
        this.hs = hs;
    }
    rayHit(ray, minT, maxT) {
        const _ = this;
        let closestSoFar = maxT;
        let closestHit = new HitResult(1, []);
        const enumerator = getEnumerator(_.hs);
        try {
            while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                const h = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
                let matchValue;
                const arg_2 = closestSoFar;
                matchValue = h.rayHit(ray, minT, arg_2);
                if (matchValue.tag === 1) {
                }
                else {
                    const hit = matchValue.fields[0];
                    closestSoFar = hit.t;
                    closestHit = (new HitResult(0, [hit]));
                }
            }
        }
        finally {
            disposeSafe(enumerator);
        }
        return closestHit;
    }
}

export function HittableList_$reflection() {
    return class_type("Shapes.HittableList", void 0, HittableList);
}

export function HittableList_$ctor_28E2EF13(hs) {
    return new HittableList(hs);
}

