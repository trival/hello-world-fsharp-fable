import { Camera, defaultCamera } from "./Image.fs.js";
import { Ray, Sphere, HittableList_$ctor_28E2EF13 } from "./Shapes.fs.js";
import { Vec3_$ctor_Z7AD9E565 } from "./Vectors/./Vec3F64.fs.js";
import { some } from "../fable_modules/fable-library.4.1.4/Option.js";
import { map } from "../fable_modules/fable-library.4.1.4/Array.js";

export const width = 400;

export const height = 300;

export const samplesPerPixel = 10;

export const maxRayBounces = 10;

export function render() {
    let a_39, a_40, b_33, a_47, a_48, b_38;
    const cam = new Camera(1.1, defaultCamera.origin, defaultCamera.direction, samplesPerPixel);
    const world = HittableList_$ctor_28E2EF13([HittableList_$ctor_28E2EF13([new Sphere(Vec3_$ctor_Z7AD9E565(0, 0, -1), 0.5), new Sphere(Vec3_$ctor_Z7AD9E565(-1, 0, -1), 0.5), new Sphere(Vec3_$ctor_Z7AD9E565(1, 0, -1), 0.5)]), new Sphere(Vec3_$ctor_Z7AD9E565(0, -100.5, -1), 100)]);
    let image;
    const width_1 = width | 0;
    const height_1 = height | 0;
    const cam_1 = cam;
    const fn = (r) => {
        const getColor = (r_1, depth) => {
            let a_9, a_10, b_6;
            const matchValue = world.rayHit(r_1, 0.001, 100000);
            if (matchValue != null) {
                const hit = matchValue;
                if (depth > 0) {
                    let direction;
                    const loop = () => {
                        let min_1, min_2, min_3, a_4, a_5, b_4;
                        let p;
                        const min = Vec3_$ctor_Z7AD9E565(-1, -1, -1);
                        const max = Vec3_$ctor_Z7AD9E565(1, 1, 1);
                        p = Vec3_$ctor_Z7AD9E565((min_1 = min.vec[0], min_1 + ((max.vec[0] - min_1) * Math.random())), (min_2 = min.vec[1], min_2 + ((max.vec[1] - min_2) * Math.random())), (min_3 = min.vec[2], min_3 + ((max.vec[2] - min_3) * Math.random())));
                        if (((a_4 = p, (a_5 = a_4, (b_4 = a_4, ((a_5.vec[0] * b_4.vec[0]) + (a_5.vec[1] * b_4.vec[1])) + (a_5.vec[2] * b_4.vec[2]))))) >= 1) {
                            return loop();
                        }
                        else {
                            return p;
                        }
                    };
                    direction = loop();
                    const a_6 = direction;
                    const b_5 = hit.normal;
                    const x_12 = a_6.vec[0] + b_5.vec[0];
                    a_6.vec[0] = x_12;
                    const y_10 = a_6.vec[1] + b_5.vec[1];
                    a_6.vec[1] = y_10;
                    const z_10 = a_6.vec[2] + b_5.vec[2];
                    a_6.vec[2] = z_10;
                    const a_7 = direction;
                    const a_12 = a_7;
                    const b_8 = 1 / Math.sqrt((a_9 = a_7, (a_10 = a_9, (b_6 = a_9, ((a_10.vec[0] * b_6.vec[0]) + (a_10.vec[1] * b_6.vec[1])) + (a_10.vec[2] * b_6.vec[2])))));
                    const x_13 = a_12.vec[0] * b_8;
                    a_12.vec[0] = x_13;
                    const y_11 = a_12.vec[1] * b_8;
                    a_12.vec[1] = y_11;
                    const z_11 = a_12.vec[2] * b_8;
                    a_12.vec[2] = z_11;
                    const newRay = new Ray(hit.p, direction);
                    const a_14 = getColor(newRay, depth - 1);
                    const x_14 = a_14.vec[0] * 0.5;
                    const y_12 = a_14.vec[1] * 0.5;
                    const z_12 = a_14.vec[2] * 0.5;
                    return Vec3_$ctor_Z7AD9E565(x_14, y_12, z_12);
                }
                else {
                    return Vec3_$ctor_Z7AD9E565(0, 0, 0);
                }
            }
            else {
                const t = 0.5 * (r_1.direction.vec[1] + 1);
                const col1 = Vec3_$ctor_Z7AD9E565(1, 1, 1);
                const col2 = Vec3_$ctor_Z7AD9E565(0.5, 0.7, 1);
                const t_1 = t;
                let a_3;
                const a_1 = col1;
                const b_1 = 1 - t_1;
                const x_6 = a_1.vec[0] * b_1;
                const y_6 = a_1.vec[1] * b_1;
                const z_6 = a_1.vec[2] * b_1;
                a_3 = Vec3_$ctor_Z7AD9E565(x_6, y_6, z_6);
                let b_3;
                const a_2 = col2;
                const b_2 = t_1;
                const x_7 = a_2.vec[0] * b_2;
                const y_7 = a_2.vec[1] * b_2;
                const z_7 = a_2.vec[2] * b_2;
                b_3 = Vec3_$ctor_Z7AD9E565(x_7, y_7, z_7);
                const x_8 = a_3.vec[0] + b_3.vec[0];
                const y_8 = a_3.vec[1] + b_3.vec[1];
                const z_8 = a_3.vec[2] + b_3.vec[2];
                return Vec3_$ctor_Z7AD9E565(x_8, y_8, z_8);
            }
        };
        return getColor(r, maxRayBounces);
    };
    const w = width_1;
    const h = height_1;
    const aspectRatio = w / h;
    const viewportHeight = 2;
    const viewportWidth = aspectRatio * viewportHeight;
    const viewportU = Vec3_$ctor_Z7AD9E565(viewportWidth, 0, 0);
    const viewportV = Vec3_$ctor_Z7AD9E565(0, -viewportHeight, 0);
    let pixelDeltaU;
    const a_16 = viewportU;
    const b_12 = 1 / w;
    const x_18 = a_16.vec[0] * b_12;
    const y_16 = a_16.vec[1] * b_12;
    const z_16 = a_16.vec[2] * b_12;
    pixelDeltaU = Vec3_$ctor_Z7AD9E565(x_18, y_16, z_16);
    let pixelDeltaV;
    const a_18 = viewportV;
    const b_14 = 1 / h;
    const x_19 = a_18.vec[0] * b_14;
    const y_17 = a_18.vec[1] * b_14;
    const z_17 = a_18.vec[2] * b_14;
    pixelDeltaV = Vec3_$ctor_Z7AD9E565(x_19, y_17, z_17);
    let viewportTopLeft;
    let a_25;
    let a_24;
    const a_21 = cam_1.origin;
    let b_17;
    const a_20 = viewportU;
    const b_16 = 1 / 2;
    const x_20 = a_20.vec[0] * b_16;
    const y_18 = a_20.vec[1] * b_16;
    const z_18 = a_20.vec[2] * b_16;
    b_17 = Vec3_$ctor_Z7AD9E565(x_20, y_18, z_18);
    const x_21 = a_21.vec[0] - b_17.vec[0];
    const y_19 = a_21.vec[1] - b_17.vec[1];
    const z_19 = a_21.vec[2] - b_17.vec[2];
    a_24 = Vec3_$ctor_Z7AD9E565(x_21, y_19, z_19);
    let b_20;
    const a_23 = viewportV;
    const b_19 = 1 / 2;
    const x_22 = a_23.vec[0] * b_19;
    const y_20 = a_23.vec[1] * b_19;
    const z_20 = a_23.vec[2] * b_19;
    b_20 = Vec3_$ctor_Z7AD9E565(x_22, y_20, z_20);
    const x_23 = a_24.vec[0] - b_20.vec[0];
    const y_21 = a_24.vec[1] - b_20.vec[1];
    const z_21 = a_24.vec[2] - b_20.vec[2];
    a_25 = Vec3_$ctor_Z7AD9E565(x_23, y_21, z_21);
    const b_21 = Vec3_$ctor_Z7AD9E565(0, 0, cam_1.focalLength);
    const x_25 = a_25.vec[0] - b_21.vec[0];
    const y_23 = a_25.vec[1] - b_21.vec[1];
    const z_23 = a_25.vec[2] - b_21.vec[2];
    viewportTopLeft = Vec3_$ctor_Z7AD9E565(x_25, y_23, z_23);
    let pixel00Loc;
    let a_31;
    const a_28 = viewportTopLeft;
    let b_24;
    const a_27 = pixelDeltaU;
    const b_23 = 1 / 2;
    const x_26 = a_27.vec[0] * b_23;
    const y_24 = a_27.vec[1] * b_23;
    const z_24 = a_27.vec[2] * b_23;
    b_24 = Vec3_$ctor_Z7AD9E565(x_26, y_24, z_24);
    const x_27 = a_28.vec[0] + b_24.vec[0];
    const y_25 = a_28.vec[1] + b_24.vec[1];
    const z_25 = a_28.vec[2] + b_24.vec[2];
    a_31 = Vec3_$ctor_Z7AD9E565(x_27, y_25, z_25);
    let b_27;
    const a_30 = pixelDeltaV;
    const b_26 = 1 / 2;
    const x_28 = a_30.vec[0] * b_26;
    const y_26 = a_30.vec[1] * b_26;
    const z_26 = a_30.vec[2] * b_26;
    b_27 = Vec3_$ctor_Z7AD9E565(x_28, y_26, z_26);
    const x_29 = a_31.vec[0] + b_27.vec[0];
    const y_27 = a_31.vec[1] + b_27.vec[1];
    const z_27 = a_31.vec[2] + b_27.vec[2];
    pixel00Loc = Vec3_$ctor_Z7AD9E565(x_29, y_27, z_27);
    const width_2 = width_1 | 0;
    const height_2 = height_1 | 0;
    const buf = new Float64Array((width_2 * height_2) * 4);
    for (let y_41 = 0; y_41 <= (height_2 - 1); y_41++) {
        console.log(some("Rendering image row"), y_41 + 1);
        for (let x_43 = 0; x_43 <= (width_2 - 1); x_43++) {
            const i = ((x_43 + (y_41 * width_2)) * 4) | 0;
            let patternInput;
            let pixelCenter;
            let a_35;
            const a_33 = pixel00Loc;
            let b_29;
            const a_32 = pixelDeltaU;
            const b_28 = x_43;
            const x_31 = a_32.vec[0] * b_28;
            const y_29 = a_32.vec[1] * b_28;
            const z_28 = a_32.vec[2] * b_28;
            b_29 = Vec3_$ctor_Z7AD9E565(x_31, y_29, z_28);
            const x_32 = a_33.vec[0] + b_29.vec[0];
            const y_30 = a_33.vec[1] + b_29.vec[1];
            const z_29 = a_33.vec[2] + b_29.vec[2];
            a_35 = Vec3_$ctor_Z7AD9E565(x_32, y_30, z_29);
            let b_31;
            const a_34 = pixelDeltaV;
            const b_30 = y_41;
            const x_33 = a_34.vec[0] * b_30;
            const y_31 = a_34.vec[1] * b_30;
            const z_30 = a_34.vec[2] * b_30;
            b_31 = Vec3_$ctor_Z7AD9E565(x_33, y_31, z_30);
            const x_34 = a_35.vec[0] + b_31.vec[0];
            const y_32 = a_35.vec[1] + b_31.vec[1];
            const z_31 = a_35.vec[2] + b_31.vec[2];
            pixelCenter = Vec3_$ctor_Z7AD9E565(x_34, y_32, z_31);
            let direction_2;
            const a_36 = pixelCenter;
            const b_32 = cam_1.origin;
            const x_35 = a_36.vec[0] - b_32.vec[0];
            const y_33 = a_36.vec[1] - b_32.vec[1];
            const z_32 = a_36.vec[2] - b_32.vec[2];
            direction_2 = Vec3_$ctor_Z7AD9E565(x_35, y_33, z_32);
            const a_37 = direction_2;
            const a_42 = a_37;
            const b_35 = 1 / Math.sqrt((a_39 = a_37, (a_40 = a_39, (b_33 = a_39, ((a_40.vec[0] * b_33.vec[0]) + (a_40.vec[1] * b_33.vec[1])) + (a_40.vec[2] * b_33.vec[2])))));
            const x_36 = a_42.vec[0] * b_35;
            a_42.vec[0] = x_36;
            const y_34 = a_42.vec[1] * b_35;
            a_42.vec[1] = y_34;
            const z_33 = a_42.vec[2] * b_35;
            a_42.vec[2] = z_33;
            const r_2 = new Ray(cam_1.origin, direction_2);
            let color = fn(r_2);
            if (cam_1.sampleCount > 1) {
                for (let forLoopVar = 2; forLoopVar <= cam_1.sampleCount; forLoopVar++) {
                    let center_4;
                    const a_43 = pixelCenter;
                    const b_36 = Vec3_$ctor_Z7AD9E565((Math.random() - 0.5) * pixelDeltaU.vec[0], (Math.random() - 0.5) * pixelDeltaV.vec[1], 0);
                    const x_38 = a_43.vec[0] + b_36.vec[0];
                    const y_36 = a_43.vec[1] + b_36.vec[1];
                    const z_35 = a_43.vec[2] + b_36.vec[2];
                    center_4 = Vec3_$ctor_Z7AD9E565(x_38, y_36, z_35);
                    let direction_1_1;
                    const a_44 = center_4;
                    const b_37 = cam_1.origin;
                    const x_39 = a_44.vec[0] - b_37.vec[0];
                    const y_37 = a_44.vec[1] - b_37.vec[1];
                    const z_36 = a_44.vec[2] - b_37.vec[2];
                    direction_1_1 = Vec3_$ctor_Z7AD9E565(x_39, y_37, z_36);
                    const a_45 = direction_1_1;
                    const a_50 = a_45;
                    const b_40 = 1 / Math.sqrt((a_47 = a_45, (a_48 = a_47, (b_38 = a_47, ((a_48.vec[0] * b_38.vec[0]) + (a_48.vec[1] * b_38.vec[1])) + (a_48.vec[2] * b_38.vec[2])))));
                    const x_40 = a_50.vec[0] * b_40;
                    a_50.vec[0] = x_40;
                    const y_38 = a_50.vec[1] * b_40;
                    a_50.vec[1] = y_38;
                    const z_37 = a_50.vec[2] * b_40;
                    a_50.vec[2] = z_37;
                    const r_1_1 = new Ray(cam_1.origin, direction_1_1);
                    const a_51 = color;
                    const b_41 = fn(r_1_1);
                    const x_41 = a_51.vec[0] + b_41.vec[0];
                    a_51.vec[0] = x_41;
                    const y_39 = a_51.vec[1] + b_41.vec[1];
                    a_51.vec[1] = y_39;
                    const z_38 = a_51.vec[2] + b_41.vec[2];
                    a_51.vec[2] = z_38;
                }
            }
            const a_53 = color;
            const b_43 = 1 / cam_1.sampleCount;
            const x_42 = a_53.vec[0] * b_43;
            a_53.vec[0] = x_42;
            const y_40 = a_53.vec[1] * b_43;
            a_53.vec[1] = y_40;
            const z_39 = a_53.vec[2] * b_43;
            a_53.vec[2] = z_39;
            const self = color;
            patternInput = [self.vec[0], self.vec[1], self.vec[2], 1];
            const r_3 = patternInput[0];
            const g = patternInput[1];
            const b_44 = patternInput[2];
            const a_55 = patternInput[3];
            buf[i] = r_3;
            buf[i + 1] = g;
            buf[i + 2] = b_44;
            buf[i + 3] = a_55;
        }
    }
    image = buf;
    return map((v) => Math.pow(v, 0.7), image, Float64Array);
}

