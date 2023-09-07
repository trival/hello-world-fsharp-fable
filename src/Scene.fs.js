import { Camera, defaultCamera } from "./Image.fs.js";
import { Ray, Sphere, HittableList_$ctor_28E2EF13 } from "./Shapes.fs.js";
import { Vec3_$ctor_Z7AD9E565 } from "./Vectors/./Vec3F64.fs.js";

export const width = 400;

export const height = 300;

export function render() {
    let a_31, a_32, b_29, a_39, a_40, b_34;
    const cam = new Camera(1.1, defaultCamera.origin, defaultCamera.direction, 40);
    const world = HittableList_$ctor_28E2EF13([HittableList_$ctor_28E2EF13([new Sphere(Vec3_$ctor_Z7AD9E565(0, 0, -1), 0.5), new Sphere(Vec3_$ctor_Z7AD9E565(-1, 0, -1), 0.5), new Sphere(Vec3_$ctor_Z7AD9E565(1, 0, -1), 0.5)]), new Sphere(Vec3_$ctor_Z7AD9E565(0, -100.5, -1), 100)]);
    const width_1 = width | 0;
    const height_1 = height | 0;
    const cam_1 = cam;
    const fn = (ray) => {
        const hit = world.rayHit(ray, 0, 100000);
        let color;
        if (hit.tag === 0) {
            const hit_1 = hit.fields[0];
            const n = hit_1.normal;
            let a_6;
            const a_4 = n;
            const x_9 = a_4.vec[0] + 1;
            const y_9 = a_4.vec[1] + 1;
            const z_9 = a_4.vec[2] + 1;
            a_6 = Vec3_$ctor_Z7AD9E565(x_9, y_9, z_9);
            const x_10 = a_6.vec[0] * 0.5;
            const y_10 = a_6.vec[1] * 0.5;
            const z_10 = a_6.vec[2] * 0.5;
            color = Vec3_$ctor_Z7AD9E565(x_10, y_10, z_10);
        }
        else {
            const t = 0.5 * (ray.direction.vec[1] + 1);
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
            color = Vec3_$ctor_Z7AD9E565(x_8, y_8, z_8);
        }
        return color;
    };
    const w = width_1;
    const h = height_1;
    const aspectRatio = w / h;
    const viewportHeight = 2;
    const viewportWidth = aspectRatio * viewportHeight;
    const viewportU = Vec3_$ctor_Z7AD9E565(viewportWidth, 0, 0);
    const viewportV = Vec3_$ctor_Z7AD9E565(0, -viewportHeight, 0);
    let pixelDeltaU;
    const a_8 = viewportU;
    const b_8 = 1 / w;
    const x_13 = a_8.vec[0] * b_8;
    const y_13 = a_8.vec[1] * b_8;
    const z_13 = a_8.vec[2] * b_8;
    pixelDeltaU = Vec3_$ctor_Z7AD9E565(x_13, y_13, z_13);
    let pixelDeltaV;
    const a_10 = viewportV;
    const b_10 = 1 / h;
    const x_14 = a_10.vec[0] * b_10;
    const y_14 = a_10.vec[1] * b_10;
    const z_14 = a_10.vec[2] * b_10;
    pixelDeltaV = Vec3_$ctor_Z7AD9E565(x_14, y_14, z_14);
    let viewportTopLeft;
    let a_17;
    let a_16;
    const a_13 = cam_1.origin;
    let b_13;
    const a_12 = viewportU;
    const b_12 = 1 / 2;
    const x_15 = a_12.vec[0] * b_12;
    const y_15 = a_12.vec[1] * b_12;
    const z_15 = a_12.vec[2] * b_12;
    b_13 = Vec3_$ctor_Z7AD9E565(x_15, y_15, z_15);
    const x_16 = a_13.vec[0] - b_13.vec[0];
    const y_16 = a_13.vec[1] - b_13.vec[1];
    const z_16 = a_13.vec[2] - b_13.vec[2];
    a_16 = Vec3_$ctor_Z7AD9E565(x_16, y_16, z_16);
    let b_16;
    const a_15 = viewportV;
    const b_15 = 1 / 2;
    const x_17 = a_15.vec[0] * b_15;
    const y_17 = a_15.vec[1] * b_15;
    const z_17 = a_15.vec[2] * b_15;
    b_16 = Vec3_$ctor_Z7AD9E565(x_17, y_17, z_17);
    const x_18 = a_16.vec[0] - b_16.vec[0];
    const y_18 = a_16.vec[1] - b_16.vec[1];
    const z_18 = a_16.vec[2] - b_16.vec[2];
    a_17 = Vec3_$ctor_Z7AD9E565(x_18, y_18, z_18);
    const b_17 = Vec3_$ctor_Z7AD9E565(0, 0, cam_1.focalLength);
    const x_20 = a_17.vec[0] - b_17.vec[0];
    const y_20 = a_17.vec[1] - b_17.vec[1];
    const z_20 = a_17.vec[2] - b_17.vec[2];
    viewportTopLeft = Vec3_$ctor_Z7AD9E565(x_20, y_20, z_20);
    let pixel00Loc;
    let a_23;
    const a_20 = viewportTopLeft;
    let b_20;
    const a_19 = pixelDeltaU;
    const b_19 = 1 / 2;
    const x_21 = a_19.vec[0] * b_19;
    const y_21 = a_19.vec[1] * b_19;
    const z_21 = a_19.vec[2] * b_19;
    b_20 = Vec3_$ctor_Z7AD9E565(x_21, y_21, z_21);
    const x_22 = a_20.vec[0] + b_20.vec[0];
    const y_22 = a_20.vec[1] + b_20.vec[1];
    const z_22 = a_20.vec[2] + b_20.vec[2];
    a_23 = Vec3_$ctor_Z7AD9E565(x_22, y_22, z_22);
    let b_23;
    const a_22 = pixelDeltaV;
    const b_22 = 1 / 2;
    const x_23 = a_22.vec[0] * b_22;
    const y_23 = a_22.vec[1] * b_22;
    const z_23 = a_22.vec[2] * b_22;
    b_23 = Vec3_$ctor_Z7AD9E565(x_23, y_23, z_23);
    const x_24 = a_23.vec[0] + b_23.vec[0];
    const y_24 = a_23.vec[1] + b_23.vec[1];
    const z_24 = a_23.vec[2] + b_23.vec[2];
    pixel00Loc = Vec3_$ctor_Z7AD9E565(x_24, y_24, z_24);
    const width_2 = width_1 | 0;
    const height_2 = height_1 | 0;
    const buf = new Float64Array((width_2 * height_2) * 4);
    for (let y_38 = 0; y_38 <= (height_2 - 1); y_38++) {
        for (let x_38 = 0; x_38 <= (width_2 - 1); x_38++) {
            const i = ((x_38 + (y_38 * width_2)) * 4) | 0;
            let patternInput;
            let pixelCenter;
            let a_27;
            const a_25 = pixel00Loc;
            let b_25;
            const a_24 = pixelDeltaU;
            const b_24 = x_38;
            const x_26 = a_24.vec[0] * b_24;
            const y_26 = a_24.vec[1] * b_24;
            const z_25 = a_24.vec[2] * b_24;
            b_25 = Vec3_$ctor_Z7AD9E565(x_26, y_26, z_25);
            const x_27 = a_25.vec[0] + b_25.vec[0];
            const y_27 = a_25.vec[1] + b_25.vec[1];
            const z_26 = a_25.vec[2] + b_25.vec[2];
            a_27 = Vec3_$ctor_Z7AD9E565(x_27, y_27, z_26);
            let b_27;
            const a_26 = pixelDeltaV;
            const b_26 = y_38;
            const x_28 = a_26.vec[0] * b_26;
            const y_28 = a_26.vec[1] * b_26;
            const z_27 = a_26.vec[2] * b_26;
            b_27 = Vec3_$ctor_Z7AD9E565(x_28, y_28, z_27);
            const x_29 = a_27.vec[0] + b_27.vec[0];
            const y_29 = a_27.vec[1] + b_27.vec[1];
            const z_28 = a_27.vec[2] + b_27.vec[2];
            pixelCenter = Vec3_$ctor_Z7AD9E565(x_29, y_29, z_28);
            let direction;
            const a_28 = pixelCenter;
            const b_28 = cam_1.origin;
            const x_30 = a_28.vec[0] - b_28.vec[0];
            const y_30 = a_28.vec[1] - b_28.vec[1];
            const z_29 = a_28.vec[2] - b_28.vec[2];
            direction = Vec3_$ctor_Z7AD9E565(x_30, y_30, z_29);
            const a_29 = direction;
            const a_34 = a_29;
            const b_31 = 1 / Math.sqrt((a_31 = a_29, (a_32 = a_31, (b_29 = a_31, ((a_32.vec[0] * b_29.vec[0]) + (a_32.vec[1] * b_29.vec[1])) + (a_32.vec[2] * b_29.vec[2])))));
            const x_31 = a_34.vec[0] * b_31;
            a_34.vec[0] = x_31;
            const y_31 = a_34.vec[1] * b_31;
            a_34.vec[1] = y_31;
            const z_30 = a_34.vec[2] * b_31;
            a_34.vec[2] = z_30;
            const r = new Ray(cam_1.origin, direction);
            let color_1 = fn(r);
            if (cam_1.sampleCount > 1) {
                for (let forLoopVar = 2; forLoopVar <= cam_1.sampleCount; forLoopVar++) {
                    let center_4;
                    const a_35 = pixelCenter;
                    const b_32 = Vec3_$ctor_Z7AD9E565((Math.random() - 0.5) * pixelDeltaU.vec[0], (Math.random() - 0.5) * pixelDeltaV.vec[1], 0);
                    const x_33 = a_35.vec[0] + b_32.vec[0];
                    const y_33 = a_35.vec[1] + b_32.vec[1];
                    const z_32 = a_35.vec[2] + b_32.vec[2];
                    center_4 = Vec3_$ctor_Z7AD9E565(x_33, y_33, z_32);
                    let direction_1_1;
                    const a_36 = center_4;
                    const b_33 = cam_1.origin;
                    const x_34 = a_36.vec[0] - b_33.vec[0];
                    const y_34 = a_36.vec[1] - b_33.vec[1];
                    const z_33 = a_36.vec[2] - b_33.vec[2];
                    direction_1_1 = Vec3_$ctor_Z7AD9E565(x_34, y_34, z_33);
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
            const r_2 = patternInput[0];
            const g = patternInput[1];
            const b_40 = patternInput[2];
            const a_47 = patternInput[3];
            buf[i] = r_2;
            buf[i + 1] = g;
            buf[i + 2] = b_40;
            buf[i + 3] = a_47;
        }
    }
    return buf;
}

