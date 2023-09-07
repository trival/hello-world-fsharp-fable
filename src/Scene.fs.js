import { Camera, defaultCamera } from "./Image.fs.js";
import { Ray, Sphere, HittableList_$ctor_28E2EF13 } from "./Shapes.fs.js";
import { Vec3_$ctor_Z7AD9E565 } from "./Vectors/./Vec3F64.fs.js";
import { map } from "../fable_modules/fable-library.4.1.4/Array.js";
import { some } from "../fable_modules/fable-library.4.1.4/Option.js";

export const width = 400;

export const height = 300;

export const samplesPerPixel = 20;

export const maxRayBounces = 20;

export function render() {
    let width_1, height_1, cam_1, fn, w, h, viewportU, viewportV, pixelDeltaU, a_24, b_16, pixelDeltaV, a_26, b_18, pixel00Loc, a_39, a_36, a_33, a_32, a_29, b_21, a_28, b_20, b_24, a_31, b_23, b_25, b_28, a_35, b_27, b_31, a_38, b_30, width_2, height_2, buf;
    const cam = new Camera(0.9, defaultCamera.origin, defaultCamera.direction, samplesPerPixel);
    const world = HittableList_$ctor_28E2EF13([HittableList_$ctor_28E2EF13([new Sphere(Vec3_$ctor_Z7AD9E565(0, 0, -1), 0.5), new Sphere(Vec3_$ctor_Z7AD9E565(-1, 0, -1), 0.5), new Sphere(Vec3_$ctor_Z7AD9E565(1, 0, -1), 0.5)]), new Sphere(Vec3_$ctor_Z7AD9E565(0, -100.5, -1), 100)]);
    return map((v) => Math.pow(v, 0.7), (width_1 = (width | 0), (height_1 = (height | 0), (cam_1 = cam, (fn = ((r) => {
        const getColor = (r_1, depth) => {
            let a_8, a_9, b_5, a_15, a_16, b_9, a_19, a_20, b_12;
            const matchValue = world.rayHit(r_1, 0.001, 100000);
            if (matchValue != null) {
                const hit = matchValue;
                if (depth > 0) {
                    let direction;
                    let n;
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
                    n = loop();
                    const a_6 = n;
                    const a_11 = a_6;
                    const b_7 = 1 / Math.sqrt((a_8 = a_6, (a_9 = a_8, (b_5 = a_8, ((a_9.vec[0] * b_5.vec[0]) + (a_9.vec[1] * b_5.vec[1])) + (a_9.vec[2] * b_5.vec[2])))));
                    const x_12 = a_11.vec[0] * b_7;
                    a_11.vec[0] = x_12;
                    const y_10 = a_11.vec[1] * b_7;
                    a_11.vec[1] = y_10;
                    const z_10 = a_11.vec[2] * b_7;
                    a_11.vec[2] = z_10;
                    direction = n;
                    const a_12 = direction;
                    const b_8 = hit.normal;
                    const x_13 = a_12.vec[0] + b_8.vec[0];
                    a_12.vec[0] = x_13;
                    const y_11 = a_12.vec[1] + b_8.vec[1];
                    a_12.vec[1] = y_11;
                    const z_11 = a_12.vec[2] + b_8.vec[2];
                    a_12.vec[2] = z_11;
                    const a_13 = direction;
                    const a_18 = a_13;
                    const b_11 = 1 / Math.sqrt((a_15 = a_13, (a_16 = a_15, (b_9 = a_15, ((a_16.vec[0] * b_9.vec[0]) + (a_16.vec[1] * b_9.vec[1])) + (a_16.vec[2] * b_9.vec[2])))));
                    const x_14 = a_18.vec[0] * b_11;
                    a_18.vec[0] = x_14;
                    const y_12 = a_18.vec[1] * b_11;
                    a_18.vec[1] = y_12;
                    const z_12 = a_18.vec[2] * b_11;
                    a_18.vec[2] = z_12;
                    if (((a_19 = direction, (a_20 = a_19, (b_12 = a_19, ((a_20.vec[0] * b_12.vec[0]) + (a_20.vec[1] * b_12.vec[1])) + (a_20.vec[2] * b_12.vec[2]))))) < 1E-06) {
                        direction = hit.normal;
                    }
                    const a_22 = getColor(new Ray(hit.p, direction), depth - 1);
                    return Vec3_$ctor_Z7AD9E565(a_22.vec[0] * 0.5, a_22.vec[1] * 0.5, a_22.vec[2] * 0.5);
                }
                else {
                    return Vec3_$ctor_Z7AD9E565(0, 0, 0);
                }
            }
            else {
                const t = 0.5 * (r_1.direction.vec[1] + 1);
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
        return getColor(r, maxRayBounces);
    }), (w = width_1, (h = height_1, (viewportU = Vec3_$ctor_Z7AD9E565((w / h) * 2, 0, 0), (viewportV = Vec3_$ctor_Z7AD9E565(0, -2, 0), (pixelDeltaU = ((a_24 = viewportU, (b_16 = (1 / w), Vec3_$ctor_Z7AD9E565(a_24.vec[0] * b_16, a_24.vec[1] * b_16, a_24.vec[2] * b_16)))), (pixelDeltaV = ((a_26 = viewportV, (b_18 = (1 / h), Vec3_$ctor_Z7AD9E565(a_26.vec[0] * b_18, a_26.vec[1] * b_18, a_26.vec[2] * b_18)))), (pixel00Loc = ((a_39 = ((a_36 = ((a_33 = ((a_32 = ((a_29 = cam_1.origin, (b_21 = ((a_28 = viewportU, (b_20 = (1 / 2), Vec3_$ctor_Z7AD9E565(a_28.vec[0] * b_20, a_28.vec[1] * b_20, a_28.vec[2] * b_20)))), Vec3_$ctor_Z7AD9E565(a_29.vec[0] - b_21.vec[0], a_29.vec[1] - b_21.vec[1], a_29.vec[2] - b_21.vec[2])))), (b_24 = ((a_31 = viewportV, (b_23 = (1 / 2), Vec3_$ctor_Z7AD9E565(a_31.vec[0] * b_23, a_31.vec[1] * b_23, a_31.vec[2] * b_23)))), Vec3_$ctor_Z7AD9E565(a_32.vec[0] - b_24.vec[0], a_32.vec[1] - b_24.vec[1], a_32.vec[2] - b_24.vec[2])))), (b_25 = Vec3_$ctor_Z7AD9E565(0, 0, cam_1.focalLength), Vec3_$ctor_Z7AD9E565(a_33.vec[0] - b_25.vec[0], a_33.vec[1] - b_25.vec[1], a_33.vec[2] - b_25.vec[2])))), (b_28 = ((a_35 = pixelDeltaU, (b_27 = (1 / 2), Vec3_$ctor_Z7AD9E565(a_35.vec[0] * b_27, a_35.vec[1] * b_27, a_35.vec[2] * b_27)))), Vec3_$ctor_Z7AD9E565(a_36.vec[0] + b_28.vec[0], a_36.vec[1] + b_28.vec[1], a_36.vec[2] + b_28.vec[2])))), (b_31 = ((a_38 = pixelDeltaV, (b_30 = (1 / 2), Vec3_$ctor_Z7AD9E565(a_38.vec[0] * b_30, a_38.vec[1] * b_30, a_38.vec[2] * b_30)))), Vec3_$ctor_Z7AD9E565(a_39.vec[0] + b_31.vec[0], a_39.vec[1] + b_31.vec[1], a_39.vec[2] + b_31.vec[2])))), (width_2 = (width_1 | 0), (height_2 = (height_1 | 0), (buf = (new Float64Array((width_2 * height_2) * 4)), ((() => {
        let a_47, a_48, b_37, a_55, a_56, b_42;
        for (let y_42 = 0; y_42 <= (height_2 - 1); y_42++) {
            console.log(some("Rendering image row"), y_42 + 1);
            for (let x_44 = 0; x_44 <= (width_2 - 1); x_44++) {
                const i = ((x_44 + (y_42 * width_2)) * 4) | 0;
                let patternInput;
                let pixelCenter;
                let a_43;
                const a_41 = pixel00Loc;
                let b_33;
                const a_40 = pixelDeltaU;
                const b_32 = x_44;
                b_33 = Vec3_$ctor_Z7AD9E565(a_40.vec[0] * b_32, a_40.vec[1] * b_32, a_40.vec[2] * b_32);
                a_43 = Vec3_$ctor_Z7AD9E565(a_41.vec[0] + b_33.vec[0], a_41.vec[1] + b_33.vec[1], a_41.vec[2] + b_33.vec[2]);
                let b_35;
                const a_42 = pixelDeltaV;
                const b_34 = y_42;
                b_35 = Vec3_$ctor_Z7AD9E565(a_42.vec[0] * b_34, a_42.vec[1] * b_34, a_42.vec[2] * b_34);
                pixelCenter = Vec3_$ctor_Z7AD9E565(a_43.vec[0] + b_35.vec[0], a_43.vec[1] + b_35.vec[1], a_43.vec[2] + b_35.vec[2]);
                let direction_2;
                const a_44 = pixelCenter;
                const b_36 = cam_1.origin;
                direction_2 = Vec3_$ctor_Z7AD9E565(a_44.vec[0] - b_36.vec[0], a_44.vec[1] - b_36.vec[1], a_44.vec[2] - b_36.vec[2]);
                const a_45 = direction_2;
                const a_50 = a_45;
                const b_39 = 1 / Math.sqrt((a_47 = a_45, (a_48 = a_47, (b_37 = a_47, ((a_48.vec[0] * b_37.vec[0]) + (a_48.vec[1] * b_37.vec[1])) + (a_48.vec[2] * b_37.vec[2])))));
                const x_37 = a_50.vec[0] * b_39;
                a_50.vec[0] = x_37;
                const y_35 = a_50.vec[1] * b_39;
                a_50.vec[1] = y_35;
                const z_34 = a_50.vec[2] * b_39;
                a_50.vec[2] = z_34;
                let color = fn(new Ray(cam_1.origin, direction_2));
                if (cam_1.sampleCount > 1) {
                    for (let forLoopVar = 2; forLoopVar <= cam_1.sampleCount; forLoopVar++) {
                        let direction_1_1;
                        let a_52;
                        const a_51 = pixelCenter;
                        const b_40 = Vec3_$ctor_Z7AD9E565((Math.random() - 0.5) * pixelDeltaU.vec[0], (Math.random() - 0.5) * pixelDeltaV.vec[1], 0);
                        a_52 = Vec3_$ctor_Z7AD9E565(a_51.vec[0] + b_40.vec[0], a_51.vec[1] + b_40.vec[1], a_51.vec[2] + b_40.vec[2]);
                        const b_41 = cam_1.origin;
                        direction_1_1 = Vec3_$ctor_Z7AD9E565(a_52.vec[0] - b_41.vec[0], a_52.vec[1] - b_41.vec[1], a_52.vec[2] - b_41.vec[2]);
                        const a_53 = direction_1_1;
                        const a_58 = a_53;
                        const b_44 = 1 / Math.sqrt((a_55 = a_53, (a_56 = a_55, (b_42 = a_55, ((a_56.vec[0] * b_42.vec[0]) + (a_56.vec[1] * b_42.vec[1])) + (a_56.vec[2] * b_42.vec[2])))));
                        const x_41 = a_58.vec[0] * b_44;
                        a_58.vec[0] = x_41;
                        const y_39 = a_58.vec[1] * b_44;
                        a_58.vec[1] = y_39;
                        const z_38 = a_58.vec[2] * b_44;
                        a_58.vec[2] = z_38;
                        const r_1_1 = new Ray(cam_1.origin, direction_1_1);
                        const a_59 = color;
                        const b_45 = fn(r_1_1);
                        const x_42 = a_59.vec[0] + b_45.vec[0];
                        a_59.vec[0] = x_42;
                        const y_40 = a_59.vec[1] + b_45.vec[1];
                        a_59.vec[1] = y_40;
                        const z_39 = a_59.vec[2] + b_45.vec[2];
                        a_59.vec[2] = z_39;
                    }
                }
                const a_61 = color;
                const b_47 = 1 / cam_1.sampleCount;
                const x_43 = a_61.vec[0] * b_47;
                a_61.vec[0] = x_43;
                const y_41 = a_61.vec[1] * b_47;
                a_61.vec[1] = y_41;
                const z_40 = a_61.vec[2] * b_47;
                a_61.vec[2] = z_40;
                const self_1 = color;
                patternInput = [self_1.vec[0], self_1.vec[1], self_1.vec[2], 1];
                buf[i] = patternInput[0];
                buf[i + 1] = patternInput[1];
                buf[i + 2] = patternInput[2];
                buf[i + 3] = patternInput[3];
            }
        }
    })(), buf))))))))))))))), Float64Array);
}

