import { Record } from "../fable_modules/fable-library.4.1.4/Types.js";
import { record_type, float64_type, int32_type } from "../fable_modules/fable-library.4.1.4/Reflection.js";
import { Vec3_$reflection } from "./Vectors/Vec3F64.fs.js";
import { Vec3_$ctor_Z7AD9E565 } from "./Vectors/./Vec3F64.fs.js";
import { Ray } from "./Shapes.fs.js";

export class RenderProps extends Record {
    constructor(width, height, focalLength, origin, direction, samplePerPixel, maxRayBounces) {
        super();
        this.width = (width | 0);
        this.height = (height | 0);
        this.focalLength = focalLength;
        this.origin = origin;
        this.direction = direction;
        this.samplePerPixel = (samplePerPixel | 0);
        this.maxRayBounces = (maxRayBounces | 0);
    }
}

export function RenderProps_$reflection() {
    return record_type("Image.RenderProps", [], RenderProps, () => [["width", int32_type], ["height", int32_type], ["focalLength", float64_type], ["origin", Vec3_$reflection()], ["direction", Vec3_$reflection()], ["samplePerPixel", int32_type], ["maxRayBounces", int32_type]]);
}

export const defaultRenderProps = new RenderProps(400, 300, 1, Vec3_$ctor_Z7AD9E565(0, 0, 0), Vec3_$ctor_Z7AD9E565(0, 0, -1), 1, 10);

export function rayColor(r, world, depth) {
    let a_10, a_11, b_6, a_17, a_18, b_10, s, a_21, a_22, b_13;
    const matchValue = world.rayHit(r, 0.001, 100000);
    if (matchValue != null) {
        const hit = matchValue;
        if (depth > 0) {
            let direction;
            let a_15;
            let a_14;
            let a_8;
            const loop = () => {
                let a_4, a_5, b_4;
                const p = Vec3_$ctor_Z7AD9E565(-1 + ((1 - -1) * Math.random()), -1 + ((1 - -1) * Math.random()), -1 + ((1 - -1) * Math.random()));
                if (((a_4 = p, (a_5 = a_4, (b_4 = a_4, ((a_5.X * b_4.X) + (a_5.Y * b_4.Y)) + (a_5.Z * b_4.Z))))) >= 1) {
                    return loop();
                }
                else {
                    return p;
                }
            };
            a_8 = loop();
            const a_13 = a_8;
            const b_8 = 1 / Math.sqrt((a_10 = a_8, (a_11 = a_10, (b_6 = a_10, ((a_11.X * b_6.X) + (a_11.Y * b_6.Y)) + (a_11.Z * b_6.Z)))));
            const x_7 = a_13.X * b_8;
            a_13.X = x_7;
            const y_7 = a_13.Y * b_8;
            a_13.Y = y_7;
            const z_7 = a_13.Z * b_8;
            a_13.Z = z_7;
            a_14 = a_8;
            const b_9 = hit.normal;
            const x_8 = a_14.X + b_9.X;
            const y_8 = a_14.Y + b_9.Y;
            const z_8 = a_14.Z + b_9.Z;
            a_15 = Vec3_$ctor_Z7AD9E565(x_8, y_8, z_8);
            const a_20 = a_15;
            const b_12 = 1 / Math.sqrt((a_17 = a_15, (a_18 = a_17, (b_10 = a_17, ((a_18.X * b_10.X) + (a_18.Y * b_10.Y)) + (a_18.Z * b_10.Z)))));
            const x_9 = a_20.X * b_12;
            a_20.X = x_9;
            const y_9 = a_20.Y * b_12;
            a_20.Y = y_9;
            const z_9 = a_20.Z * b_12;
            a_20.Z = z_9;
            direction = a_15;
            if ((s = 1E-06, ((a_21 = direction, (a_22 = a_21, (b_13 = a_21, ((a_22.X * b_13.X) + (a_22.Y * b_13.Y)) + (a_22.Z * b_13.Z))))) < s)) {
                direction = hit.normal;
            }
            const newRay = new Ray(hit.p, direction);
            const a_24 = rayColor(newRay, world, depth - 1);
            const x_10 = a_24.X * 0.5;
            const y_10 = a_24.Y * 0.5;
            const z_10 = a_24.Z * 0.5;
            return Vec3_$ctor_Z7AD9E565(x_10, y_10, z_10);
        }
        else {
            return Vec3_$ctor_Z7AD9E565(0, 0, 0);
        }
    }
    else {
        const t = 0.5 * (r.direction.Y + 1);
        const col1 = Vec3_$ctor_Z7AD9E565(1, 1, 1);
        const col2 = Vec3_$ctor_Z7AD9E565(0.5, 0.7, 1);
        const t_1 = t;
        let a_3;
        const a_1 = col1;
        const b_1 = 1 - t_1;
        const x_2 = a_1.X * b_1;
        const y_2 = a_1.Y * b_1;
        const z_2 = a_1.Z * b_1;
        a_3 = Vec3_$ctor_Z7AD9E565(x_2, y_2, z_2);
        let b_3;
        const a_2 = col2;
        const b_2 = t_1;
        const x_3 = a_2.X * b_2;
        const y_3 = a_2.Y * b_2;
        const z_3 = a_2.Z * b_2;
        b_3 = Vec3_$ctor_Z7AD9E565(x_3, y_3, z_3);
        const x_4 = a_3.X + b_3.X;
        const y_4 = a_3.Y + b_3.Y;
        const z_4 = a_3.Z + b_3.Z;
        return Vec3_$ctor_Z7AD9E565(x_4, y_4, z_4);
    }
}

