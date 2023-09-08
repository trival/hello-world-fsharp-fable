import { Record } from "../fable_modules/fable-library.4.1.4/Types.js";
import { Vec3_$reflection } from "./Vectors/Vec3F64.fs.js";
import { class_type, bool_type, float64_type, record_type } from "../fable_modules/fable-library.4.1.4/Reflection.js";
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
    b_2 = Vec3_$ctor_Z7AD9E565(a_1.X * b_1, a_1.Y * b_1, a_1.Z * b_1);
    return Vec3_$ctor_Z7AD9E565(a_2.X + b_2.X, a_2.Y + b_2.Y, a_2.Z + b_2.Z);
}

export class Hit extends Record {
    constructor(t, p, normal, frontFace) {
        super();
        this.t = t;
        this.p = p;
        this.normal = normal;
        this.frontFace = frontFace;
    }
}

export function Hit_$reflection() {
    return record_type("Shapes.Hit", [], Hit, () => [["t", float64_type], ["p", Vec3_$reflection()], ["normal", Vec3_$reflection()], ["frontFace", bool_type]]);
}

export class Sphere extends Record {
    constructor(center, radius) {
        super();
        this.center = center;
        this.radius = radius;
    }
    rayHit(ray, minT, maxT) {
        let a_2, a_3, b_2, t_1, p_1, normal, a_6, a_4, b_3, b_5, frontFace, a_7, b_6, a_8;
        const s = this;
        let oc;
        const a = ray.origin;
        const b = s.center;
        oc = Vec3_$ctor_Z7AD9E565(a.X - b.X, a.Y - b.Y, a.Z - b.Z);
        let halfB;
        const a_1 = oc;
        const b_1 = ray.direction;
        halfB = (((a_1.X * b_1.X) + (a_1.Y * b_1.Y)) + (a_1.Z * b_1.Z));
        const discriminant = (halfB * halfB) - (((a_2 = oc, (a_3 = a_2, (b_2 = a_2, ((a_3.X * b_2.X) + (a_3.Y * b_2.Y)) + (a_3.Z * b_2.Z))))) - (s.radius * s.radius));
        if (discriminant < 0) {
            return void 0;
        }
        else {
            const sqrtD = Math.sqrt(discriminant);
            let t = -halfB - sqrtD;
            if ((t < minT) ? true : (t > maxT)) {
                t = (-halfB + sqrtD);
                if ((t < minT) ? true : (t > maxT)) {
                    t = -1;
                }
            }
            if (t < 0) {
                return void 0;
            }
            else {
                const p = Ray__at_5E38073B(ray, t);
                return (t_1 = t, (p_1 = p, (normal = ((a_6 = ((a_4 = p, (b_3 = s.center, Vec3_$ctor_Z7AD9E565(a_4.X - b_3.X, a_4.Y - b_3.Y, a_4.Z - b_3.Z)))), (b_5 = (1 / s.radius), Vec3_$ctor_Z7AD9E565(a_6.X * b_5, a_6.Y * b_5, a_6.Z * b_5)))), (frontFace = (((a_7 = normal, (b_6 = p_1, ((a_7.X * b_6.X) + (a_7.Y * b_6.Y)) + (a_7.Z * b_6.Z)))) < 0), new Hit(t_1, p_1, frontFace ? normal : ((a_8 = normal, Vec3_$ctor_Z7AD9E565(a_8.X * -1, a_8.Y * -1, a_8.Z * -1))), frontFace)))));
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
        let closestHit = void 0;
        const enumerator = getEnumerator(_.hs);
        try {
            while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                const h = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
                let matchValue;
                const arg_2 = closestSoFar;
                matchValue = h.rayHit(ray, minT, arg_2);
                if (matchValue == null) {
                }
                else {
                    const hit = matchValue;
                    closestSoFar = hit.t;
                    closestHit = hit;
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

