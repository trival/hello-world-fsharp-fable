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
                        p = Vec3_$ctor_Z7AD9E565((min_1 = min.X, min_1 + ((max.X - min_1) * Math.random())), (min_2 = min.Y, min_2 + ((max.Y - min_2) * Math.random())), (min_3 = min.Z, min_3 + ((max.Z - min_3) * Math.random())));
                        if (((a_4 = p, (a_5 = a_4, (b_4 = a_4, ((a_5.X * b_4.X) + (a_5.Y * b_4.Y)) + (a_5.Z * b_4.Z))))) >= 1) {
                            return loop();
                        }
                        else {
                            return p;
                        }
                    };
                    n = loop();
                    const a_6 = n;
                    const a_11 = a_6;
                    const b_7 = 1 / Math.sqrt((a_8 = a_6, (a_9 = a_8, (b_5 = a_8, ((a_9.X * b_5.X) + (a_9.Y * b_5.Y)) + (a_9.Z * b_5.Z)))));
                    const x_12 = a_11.X * b_7;
                    a_11.X = x_12;
                    const y_10 = a_11.Y * b_7;
                    a_11.Y = y_10;
                    const z_10 = a_11.Z * b_7;
                    a_11.Z = z_10;
                    direction = n;
                    const a_12 = direction;
                    const b_8 = hit.normal;
                    const x_13 = a_12.X + b_8.X;
                    a_12.X = x_13;
                    const y_11 = a_12.Y + b_8.Y;
                    a_12.Y = y_11;
                    const z_11 = a_12.Z + b_8.Z;
                    a_12.Z = z_11;
                    const a_13 = direction;
                    const a_18 = a_13;
                    const b_11 = 1 / Math.sqrt((a_15 = a_13, (a_16 = a_15, (b_9 = a_15, ((a_16.X * b_9.X) + (a_16.Y * b_9.Y)) + (a_16.Z * b_9.Z)))));
                    const x_14 = a_18.X * b_11;
                    a_18.X = x_14;
                    const y_12 = a_18.Y * b_11;
                    a_18.Y = y_12;
                    const z_12 = a_18.Z * b_11;
                    a_18.Z = z_12;
                    if (((a_19 = direction, (a_20 = a_19, (b_12 = a_19, ((a_20.X * b_12.X) + (a_20.Y * b_12.Y)) + (a_20.Z * b_12.Z))))) < 1E-06) {
                        direction = hit.normal;
                    }
                    const a_22 = getColor(new Ray(hit.p, direction), depth - 1);
                    return Vec3_$ctor_Z7AD9E565(a_22.X * 0.5, a_22.Y * 0.5, a_22.Z * 0.5);
                }
                else {
                    return Vec3_$ctor_Z7AD9E565(0, 0, 0);
                }
            }
            else {
                const t = 0.5 * (r_1.direction.Y + 1);
                const col1 = Vec3_$ctor_Z7AD9E565(1, 1, 1);
                const arg_4 = Vec3_$ctor_Z7AD9E565(0.5, 0.7, 1);
                const t_1 = t;
                let a_3;
                const a_1 = col1;
                const b_1 = 1 - t_1;
                a_3 = Vec3_$ctor_Z7AD9E565(a_1.X * b_1, a_1.Y * b_1, a_1.Z * b_1);
                let b_3;
                const a_2 = arg_4;
                const b_2 = t_1;
                b_3 = Vec3_$ctor_Z7AD9E565(a_2.X * b_2, a_2.Y * b_2, a_2.Z * b_2);
                return Vec3_$ctor_Z7AD9E565(a_3.X + b_3.X, a_3.Y + b_3.Y, a_3.Z + b_3.Z);
            }
        };
        return getColor(r, maxRayBounces);
    }), (w = width_1, (h = height_1, (viewportU = Vec3_$ctor_Z7AD9E565((w / h) * 2, 0, 0), (viewportV = Vec3_$ctor_Z7AD9E565(0, -2, 0), (pixelDeltaU = ((a_24 = viewportU, (b_16 = (1 / w), Vec3_$ctor_Z7AD9E565(a_24.X * b_16, a_24.Y * b_16, a_24.Z * b_16)))), (pixelDeltaV = ((a_26 = viewportV, (b_18 = (1 / h), Vec3_$ctor_Z7AD9E565(a_26.X * b_18, a_26.Y * b_18, a_26.Z * b_18)))), (pixel00Loc = ((a_39 = ((a_36 = ((a_33 = ((a_32 = ((a_29 = cam_1.origin, (b_21 = ((a_28 = viewportU, (b_20 = (1 / 2), Vec3_$ctor_Z7AD9E565(a_28.X * b_20, a_28.Y * b_20, a_28.Z * b_20)))), Vec3_$ctor_Z7AD9E565(a_29.X - b_21.X, a_29.Y - b_21.Y, a_29.Z - b_21.Z)))), (b_24 = ((a_31 = viewportV, (b_23 = (1 / 2), Vec3_$ctor_Z7AD9E565(a_31.X * b_23, a_31.Y * b_23, a_31.Z * b_23)))), Vec3_$ctor_Z7AD9E565(a_32.X - b_24.X, a_32.Y - b_24.Y, a_32.Z - b_24.Z)))), (b_25 = Vec3_$ctor_Z7AD9E565(0, 0, cam_1.focalLength), Vec3_$ctor_Z7AD9E565(a_33.X - b_25.X, a_33.Y - b_25.Y, a_33.Z - b_25.Z)))), (b_28 = ((a_35 = pixelDeltaU, (b_27 = (1 / 2), Vec3_$ctor_Z7AD9E565(a_35.X * b_27, a_35.Y * b_27, a_35.Z * b_27)))), Vec3_$ctor_Z7AD9E565(a_36.X + b_28.X, a_36.Y + b_28.Y, a_36.Z + b_28.Z)))), (b_31 = ((a_38 = pixelDeltaV, (b_30 = (1 / 2), Vec3_$ctor_Z7AD9E565(a_38.X * b_30, a_38.Y * b_30, a_38.Z * b_30)))), Vec3_$ctor_Z7AD9E565(a_39.X + b_31.X, a_39.Y + b_31.Y, a_39.Z + b_31.Z)))), (width_2 = (width_1 | 0), (height_2 = (height_1 | 0), (buf = (new Float64Array((width_2 * height_2) * 4)), ((() => {
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
                b_33 = Vec3_$ctor_Z7AD9E565(a_40.X * b_32, a_40.Y * b_32, a_40.Z * b_32);
                a_43 = Vec3_$ctor_Z7AD9E565(a_41.X + b_33.X, a_41.Y + b_33.Y, a_41.Z + b_33.Z);
                let b_35;
                const a_42 = pixelDeltaV;
                const b_34 = y_42;
                b_35 = Vec3_$ctor_Z7AD9E565(a_42.X * b_34, a_42.Y * b_34, a_42.Z * b_34);
                pixelCenter = Vec3_$ctor_Z7AD9E565(a_43.X + b_35.X, a_43.Y + b_35.Y, a_43.Z + b_35.Z);
                let direction_2;
                const a_44 = pixelCenter;
                const b_36 = cam_1.origin;
                direction_2 = Vec3_$ctor_Z7AD9E565(a_44.X - b_36.X, a_44.Y - b_36.Y, a_44.Z - b_36.Z);
                const a_45 = direction_2;
                const a_50 = a_45;
                const b_39 = 1 / Math.sqrt((a_47 = a_45, (a_48 = a_47, (b_37 = a_47, ((a_48.X * b_37.X) + (a_48.Y * b_37.Y)) + (a_48.Z * b_37.Z)))));
                const x_37 = a_50.X * b_39;
                a_50.X = x_37;
                const y_35 = a_50.Y * b_39;
                a_50.Y = y_35;
                const z_34 = a_50.Z * b_39;
                a_50.Z = z_34;
                let color = fn(new Ray(cam_1.origin, direction_2));
                if (cam_1.sampleCount > 1) {
                    for (let forLoopVar = 2; forLoopVar <= cam_1.sampleCount; forLoopVar++) {
                        let direction_1_1;
                        let a_52;
                        const a_51 = pixelCenter;
                        const b_40 = Vec3_$ctor_Z7AD9E565((Math.random() - 0.5) * pixelDeltaU.X, (Math.random() - 0.5) * pixelDeltaV.Y, 0);
                        a_52 = Vec3_$ctor_Z7AD9E565(a_51.X + b_40.X, a_51.Y + b_40.Y, a_51.Z + b_40.Z);
                        const b_41 = cam_1.origin;
                        direction_1_1 = Vec3_$ctor_Z7AD9E565(a_52.X - b_41.X, a_52.Y - b_41.Y, a_52.Z - b_41.Z);
                        const a_53 = direction_1_1;
                        const a_58 = a_53;
                        const b_44 = 1 / Math.sqrt((a_55 = a_53, (a_56 = a_55, (b_42 = a_55, ((a_56.X * b_42.X) + (a_56.Y * b_42.Y)) + (a_56.Z * b_42.Z)))));
                        const x_41 = a_58.X * b_44;
                        a_58.X = x_41;
                        const y_39 = a_58.Y * b_44;
                        a_58.Y = y_39;
                        const z_38 = a_58.Z * b_44;
                        a_58.Z = z_38;
                        const r_1_1 = new Ray(cam_1.origin, direction_1_1);
                        const a_59 = color;
                        const b_45 = fn(r_1_1);
                        const x_42 = a_59.X + b_45.X;
                        a_59.X = x_42;
                        const y_40 = a_59.Y + b_45.Y;
                        a_59.Y = y_40;
                        const z_39 = a_59.Z + b_45.Z;
                        a_59.Z = z_39;
                    }
                }
                const a_61 = color;
                const b_47 = 1 / cam_1.sampleCount;
                const x_43 = a_61.X * b_47;
                a_61.X = x_43;
                const y_41 = a_61.Y * b_47;
                a_61.Y = y_41;
                const z_40 = a_61.Z * b_47;
                a_61.Z = z_40;
                const self_1 = color;
                patternInput = [self_1.X, self_1.Y, self_1.Z, 1];
                buf[i] = patternInput[0];
                buf[i + 1] = patternInput[1];
                buf[i + 2] = patternInput[2];
                buf[i + 3] = patternInput[3];
            }
        }
    })(), buf))))))))))))))), Float64Array);
}

