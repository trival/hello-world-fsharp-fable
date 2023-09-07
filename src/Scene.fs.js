import { Camera, defaultCamera } from "./Image.fs.js";
import { Ray, Sphere, HittableList_$ctor_28E2EF13 } from "./Shapes.fs.js";
import { Vec3_$ctor_Z7AD9E565 } from "./Vectors/./Vec3F64.fs.js";
import { some } from "../fable_modules/fable-library.4.1.4/Option.js";

export const width = 400;

export const height = 300;

export function render() {
    let a_31, a_32, b_29, a_39, a_40, b_34;
    const cam = new Camera(1.1, defaultCamera.origin, defaultCamera.direction, 10);
    const world = HittableList_$ctor_28E2EF13([HittableList_$ctor_28E2EF13([new Sphere(Vec3_$ctor_Z7AD9E565(0, 0, -1), 0.5), new Sphere(Vec3_$ctor_Z7AD9E565(-1, 0, -1), 0.5), new Sphere(Vec3_$ctor_Z7AD9E565(1, 0, -1), 0.5)]), new Sphere(Vec3_$ctor_Z7AD9E565(0, -100.5, -1), 100)]);
    const width_1 = width | 0;
    const height_1 = height | 0;
    const cam_1 = cam;
    const fn = (ray) => {
        const hit = world.rayHit(ray, 0, 100000);
        if (hit.tag === 0) {
            let a_6;
            const a_4 = hit.fields[0].normal;
            a_6 = Vec3_$ctor_Z7AD9E565(a_4.vec[0] + 1, a_4.vec[1] + 1, a_4.vec[2] + 1);
            return Vec3_$ctor_Z7AD9E565(a_6.vec[0] * 0.5, a_6.vec[1] * 0.5, a_6.vec[2] * 0.5);
        }
        else {
            const t = 0.5 * (ray.direction.vec[1] + 1);
            const col1 = Vec3_$ctor_Z7AD9E565(1, 1, 1);
            const arg_4 = Vec3_$ctor_Z7AD9E565(0.5, 0.7, 1);
            const t_1 = t;
            let a_3;
            const a_1 = col1;
            const b_1 = 1 - t_1;
            a_3 = Vec3_$ctor_Z7AD9E565(a_1.vec[0] * b_1, a_1.vec[1] * b_1, a_1.vec[2] * b_1);
            let b_3;
            const a_2 = arg_4;
            const b_2 = t_1;
            b_3 = Vec3_$ctor_Z7AD9E565(a_2.vec[0] * b_2, a_2.vec[1] * b_2, a_2.vec[2] * b_2);
            return Vec3_$ctor_Z7AD9E565(a_3.vec[0] + b_3.vec[0], a_3.vec[1] + b_3.vec[1], a_3.vec[2] + b_3.vec[2]);
        }
    };
    const w = width_1;
    const h = height_1;
    const viewportU = Vec3_$ctor_Z7AD9E565((w / h) * 2, 0, 0);
    const viewportV = Vec3_$ctor_Z7AD9E565(0, -2, 0);
    let pixelDeltaU;
    const a_8 = viewportU;
    const b_8 = 1 / w;
    pixelDeltaU = Vec3_$ctor_Z7AD9E565(a_8.vec[0] * b_8, a_8.vec[1] * b_8, a_8.vec[2] * b_8);
    let pixelDeltaV;
    const a_10 = viewportV;
    const b_10 = 1 / h;
    pixelDeltaV = Vec3_$ctor_Z7AD9E565(a_10.vec[0] * b_10, a_10.vec[1] * b_10, a_10.vec[2] * b_10);
    let pixel00Loc;
    let a_23;
    let a_20;
    let a_17;
    let a_16;
    const a_13 = cam_1.origin;
    let b_13;
    const a_12 = viewportU;
    const b_12 = 1 / 2;
    b_13 = Vec3_$ctor_Z7AD9E565(a_12.vec[0] * b_12, a_12.vec[1] * b_12, a_12.vec[2] * b_12);
    a_16 = Vec3_$ctor_Z7AD9E565(a_13.vec[0] - b_13.vec[0], a_13.vec[1] - b_13.vec[1], a_13.vec[2] - b_13.vec[2]);
    let b_16;
    const a_15 = viewportV;
    const b_15 = 1 / 2;
    b_16 = Vec3_$ctor_Z7AD9E565(a_15.vec[0] * b_15, a_15.vec[1] * b_15, a_15.vec[2] * b_15);
    a_17 = Vec3_$ctor_Z7AD9E565(a_16.vec[0] - b_16.vec[0], a_16.vec[1] - b_16.vec[1], a_16.vec[2] - b_16.vec[2]);
    const b_17 = Vec3_$ctor_Z7AD9E565(0, 0, cam_1.focalLength);
    a_20 = Vec3_$ctor_Z7AD9E565(a_17.vec[0] - b_17.vec[0], a_17.vec[1] - b_17.vec[1], a_17.vec[2] - b_17.vec[2]);
    let b_20;
    const a_19 = pixelDeltaU;
    const b_19 = 1 / 2;
    b_20 = Vec3_$ctor_Z7AD9E565(a_19.vec[0] * b_19, a_19.vec[1] * b_19, a_19.vec[2] * b_19);
    a_23 = Vec3_$ctor_Z7AD9E565(a_20.vec[0] + b_20.vec[0], a_20.vec[1] + b_20.vec[1], a_20.vec[2] + b_20.vec[2]);
    let b_23;
    const a_22 = pixelDeltaV;
    const b_22 = 1 / 2;
    b_23 = Vec3_$ctor_Z7AD9E565(a_22.vec[0] * b_22, a_22.vec[1] * b_22, a_22.vec[2] * b_22);
    pixel00Loc = Vec3_$ctor_Z7AD9E565(a_23.vec[0] + b_23.vec[0], a_23.vec[1] + b_23.vec[1], a_23.vec[2] + b_23.vec[2]);
    const width_2 = width_1 | 0;
    const height_2 = height_1 | 0;
    const buf = new Float64Array((width_2 * height_2) * 4);
    for (let y_38 = 0; y_38 <= (height_2 - 1); y_38++) {
        console.log(some("Rendering image row"), y_38 + 1);
        for (let x_38 = 0; x_38 <= (width_2 - 1); x_38++) {
            const i = ((x_38 + (y_38 * width_2)) * 4) | 0;
            let patternInput;
            let pixelCenter;
            let a_27;
            const a_25 = pixel00Loc;
            let b_25;
            const a_24 = pixelDeltaU;
            const b_24 = x_38;
            b_25 = Vec3_$ctor_Z7AD9E565(a_24.vec[0] * b_24, a_24.vec[1] * b_24, a_24.vec[2] * b_24);
            a_27 = Vec3_$ctor_Z7AD9E565(a_25.vec[0] + b_25.vec[0], a_25.vec[1] + b_25.vec[1], a_25.vec[2] + b_25.vec[2]);
            let b_27;
            const a_26 = pixelDeltaV;
            const b_26 = y_38;
            b_27 = Vec3_$ctor_Z7AD9E565(a_26.vec[0] * b_26, a_26.vec[1] * b_26, a_26.vec[2] * b_26);
            pixelCenter = Vec3_$ctor_Z7AD9E565(a_27.vec[0] + b_27.vec[0], a_27.vec[1] + b_27.vec[1], a_27.vec[2] + b_27.vec[2]);
            let direction;
            const a_28 = pixelCenter;
            const b_28 = cam_1.origin;
            direction = Vec3_$ctor_Z7AD9E565(a_28.vec[0] - b_28.vec[0], a_28.vec[1] - b_28.vec[1], a_28.vec[2] - b_28.vec[2]);
            const a_29 = direction;
            const a_34 = a_29;
            const b_31 = 1 / Math.sqrt((a_31 = a_29, (a_32 = a_31, (b_29 = a_31, ((a_32.vec[0] * b_29.vec[0]) + (a_32.vec[1] * b_29.vec[1])) + (a_32.vec[2] * b_29.vec[2])))));
            const x_31 = a_34.vec[0] * b_31;
            a_34.vec[0] = x_31;
            const y_31 = a_34.vec[1] * b_31;
            a_34.vec[1] = y_31;
            const z_30 = a_34.vec[2] * b_31;
            a_34.vec[2] = z_30;
            let color_1 = fn(new Ray(cam_1.origin, direction));
            if (cam_1.sampleCount > 1) {
                for (let forLoopVar = 2; forLoopVar <= cam_1.sampleCount; forLoopVar++) {
                    let direction_1_1;
                    let a_36;
                    const a_35 = pixelCenter;
                    const b_32 = Vec3_$ctor_Z7AD9E565((Math.random() - 0.5) * pixelDeltaU.vec[0], (Math.random() - 0.5) * pixelDeltaV.vec[1], 0);
                    a_36 = Vec3_$ctor_Z7AD9E565(a_35.vec[0] + b_32.vec[0], a_35.vec[1] + b_32.vec[1], a_35.vec[2] + b_32.vec[2]);
                    const b_33 = cam_1.origin;
                    direction_1_1 = Vec3_$ctor_Z7AD9E565(a_36.vec[0] - b_33.vec[0], a_36.vec[1] - b_33.vec[1], a_36.vec[2] - b_33.vec[2]);
                    const a_37 = direction_1_1;
                    const a_42 = a_37;
                    const b_36 = 1 / Math.sqrt((a_39 = a_37, (a_40 = a_39, (b_34 = a_39, ((a_40.vec[0] * b_34.vec[0]) + (a_40.vec[1] * b_34.vec[1])) + (a_40.vec[2] * b_34.vec[2])))));
                    const x_35 = a_42.vec[0] * b_36;
                    a_42.vec[0] = x_35;
                    const y_35 = a_42.vec[1] * b_36;
                    a_42.vec[1] = y_35;
                    const z_34 = a_42.vec[2] * b_36;
                    a_42.vec[2] = z_34;
                    const r_1 = new Ray(cam_1.origin, direction_1_1);
                    const a_43 = color_1;
                    const b_37 = fn(r_1);
                    const x_36 = a_43.vec[0] + b_37.vec[0];
                    a_43.vec[0] = x_36;
                    const y_36 = a_43.vec[1] + b_37.vec[1];
                    a_43.vec[1] = y_36;
                    const z_35 = a_43.vec[2] + b_37.vec[2];
                    a_43.vec[2] = z_35;
                }
            }
            const a_45 = color_1;
            const b_39 = 1 / cam_1.sampleCount;
            const x_37 = a_45.vec[0] * b_39;
            a_45.vec[0] = x_37;
            const y_37 = a_45.vec[1] * b_39;
            a_45.vec[1] = y_37;
            const z_36 = a_45.vec[2] * b_39;
            a_45.vec[2] = z_36;
            const self = color_1;
            patternInput = [self.vec[0], self.vec[1], self.vec[2], 1];
            buf[i] = patternInput[0];
            buf[i + 1] = patternInput[1];
            buf[i + 2] = patternInput[2];
            buf[i + 3] = patternInput[3];
        }
    }
    return buf;
}

