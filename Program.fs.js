import { map } from "./fable_modules/fable-library.4.1.4/Array.js";
import { Ray, Sphere, HittableList_$ctor_28E2EF13 } from "./src/Shapes.fs.js";
import { singleton, append, delay } from "./fable_modules/fable-library.4.1.4/Seq.js";
import { Vec3_$ctor_Z7AD9E565 } from "./src/Vectors/./Vec3F64.fs.js";
import { Camera, defaultCamera } from "./src/Image.fs.js";

export const div = document.createElement("div");

div.innerHTML = "Hello F# ray tracer!";

document.body.appendChild(div);

export const width = 400;

export const height = 300;

export const canvas = document.getElementById("canvas");

canvas.width = width;

canvas.height = height;

canvas.style.transform = 'scale(2)';

canvas.style.transformOrigin = '0 0';

export const ctx = canvas.getContext('2d');

export function colorBufferToBytes(buf_1) {
    return map((v) => ((v * 255) & 0xFF), buf_1, Uint8Array);
}

export const newData = new ImageData(width, height);

export const buf = (() => {
    let width_1, height_1, cam, fn, w, h, aspectRatio, viewportHeight, viewportWidth, viewportU, viewportV, pixelDeltaU, a_27, b_8, x_13, y_13, z_13, pixelDeltaV, a_32, b_10, x_14, y_14, z_14, viewportTopLeft, a_60, a_53, a_41, b_13, a_37, b_12, x_15, y_15, z_15, x_16, y_16, z_16, b_16, a_49, b_15, x_17, y_17, z_17, x_18, y_18, z_18, b_17, x_20, y_20, z_20, pixel00Loc, a_84, a_72, b_20, a_68, b_19, x_21, y_21, z_21, x_22, y_22, z_22, b_23, a_80, b_22, x_23, y_23, z_23, x_24, y_24, z_24, width_2, height_2, buf_1;
    const world = HittableList_$ctor_28E2EF13(delay(() => append(singleton(new Sphere(Vec3_$ctor_Z7AD9E565(0, 0, -1), 0.5)), delay(() => append(singleton(new Sphere(Vec3_$ctor_Z7AD9E565(-1, 0, -1), 0.5)), delay(() => append(singleton(new Sphere(Vec3_$ctor_Z7AD9E565(1, 0, -1), 0.5)), delay(() => singleton(new Sphere(Vec3_$ctor_Z7AD9E565(0, -100.5, -1), 100))))))))));
    return colorBufferToBytes((width_1 = (width | 0), (height_1 = (height | 0), (cam = (new Camera(1.1, defaultCamera.origin, defaultCamera.direction, 4)), (fn = ((ray) => {
        const hit = world.rayHit(ray, 0, 100000);
        let color;
        if (hit.tag === 0) {
            const hit_1 = hit.fields[0];
            const n = hit_1.normal;
            let a_22;
            const a_17 = n;
            const x_9 = a_17.vec[0] + 1;
            const y_9 = a_17.vec[1] + 1;
            const z_9 = a_17.vec[2] + 1;
            a_22 = Vec3_$ctor_Z7AD9E565(x_9, y_9, z_9);
            const x_10 = a_22.vec[0] * 0.5;
            const y_10 = a_22.vec[1] * 0.5;
            const z_10 = a_22.vec[2] * 0.5;
            color = Vec3_$ctor_Z7AD9E565(x_10, y_10, z_10);
        }
        else {
            const t = 0.5 * (ray.direction.vec[1] + 1);
            const col1 = Vec3_$ctor_Z7AD9E565(1, 1, 1);
            const col2 = Vec3_$ctor_Z7AD9E565(0.5, 0.7, 1);
            const t_1 = t;
            let a_10;
            const a_2 = col1;
            const b_1 = 1 - t_1;
            const x_6 = a_2.vec[0] * b_1;
            const y_6 = a_2.vec[1] * b_1;
            const z_6 = a_2.vec[2] * b_1;
            a_10 = Vec3_$ctor_Z7AD9E565(x_6, y_6, z_6);
            let b_3;
            const a_6 = col2;
            const b_2 = t_1;
            const x_7 = a_6.vec[0] * b_2;
            const y_7 = a_6.vec[1] * b_2;
            const z_7 = a_6.vec[2] * b_2;
            b_3 = Vec3_$ctor_Z7AD9E565(x_7, y_7, z_7);
            const x_8 = a_10.vec[0] + b_3.vec[0];
            const y_8 = a_10.vec[1] + b_3.vec[1];
            const z_8 = a_10.vec[2] + b_3.vec[2];
            color = Vec3_$ctor_Z7AD9E565(x_8, y_8, z_8);
        }
        return color;
    }), (w = width_1, (h = height_1, (aspectRatio = (w / h), (viewportHeight = 2, (viewportWidth = (aspectRatio * viewportHeight), (viewportU = Vec3_$ctor_Z7AD9E565(viewportWidth, 0, 0), (viewportV = Vec3_$ctor_Z7AD9E565(0, -viewportHeight, 0), (pixelDeltaU = ((a_27 = viewportU, (b_8 = (1 / w), (x_13 = (a_27.vec[0] * b_8), (y_13 = (a_27.vec[1] * b_8), (z_13 = (a_27.vec[2] * b_8), Vec3_$ctor_Z7AD9E565(x_13, y_13, z_13))))))), (pixelDeltaV = ((a_32 = viewportV, (b_10 = (1 / h), (x_14 = (a_32.vec[0] * b_10), (y_14 = (a_32.vec[1] * b_10), (z_14 = (a_32.vec[2] * b_10), Vec3_$ctor_Z7AD9E565(x_14, y_14, z_14))))))), (viewportTopLeft = ((a_60 = ((a_53 = ((a_41 = cam.origin, (b_13 = ((a_37 = viewportU, (b_12 = (1 / 2), (x_15 = (a_37.vec[0] * b_12), (y_15 = (a_37.vec[1] * b_12), (z_15 = (a_37.vec[2] * b_12), Vec3_$ctor_Z7AD9E565(x_15, y_15, z_15))))))), (x_16 = (a_41.vec[0] - b_13.vec[0]), (y_16 = (a_41.vec[1] - b_13.vec[1]), (z_16 = (a_41.vec[2] - b_13.vec[2]), Vec3_$ctor_Z7AD9E565(x_16, y_16, z_16))))))), (b_16 = ((a_49 = viewportV, (b_15 = (1 / 2), (x_17 = (a_49.vec[0] * b_15), (y_17 = (a_49.vec[1] * b_15), (z_17 = (a_49.vec[2] * b_15), Vec3_$ctor_Z7AD9E565(x_17, y_17, z_17))))))), (x_18 = (a_53.vec[0] - b_16.vec[0]), (y_18 = (a_53.vec[1] - b_16.vec[1]), (z_18 = (a_53.vec[2] - b_16.vec[2]), Vec3_$ctor_Z7AD9E565(x_18, y_18, z_18))))))), (b_17 = Vec3_$ctor_Z7AD9E565(0, 0, cam.focalLength), (x_20 = (a_60.vec[0] - b_17.vec[0]), (y_20 = (a_60.vec[1] - b_17.vec[1]), (z_20 = (a_60.vec[2] - b_17.vec[2]), Vec3_$ctor_Z7AD9E565(x_20, y_20, z_20))))))), (pixel00Loc = ((a_84 = ((a_72 = viewportTopLeft, (b_20 = ((a_68 = pixelDeltaU, (b_19 = (1 / 2), (x_21 = (a_68.vec[0] * b_19), (y_21 = (a_68.vec[1] * b_19), (z_21 = (a_68.vec[2] * b_19), Vec3_$ctor_Z7AD9E565(x_21, y_21, z_21))))))), (x_22 = (a_72.vec[0] + b_20.vec[0]), (y_22 = (a_72.vec[1] + b_20.vec[1]), (z_22 = (a_72.vec[2] + b_20.vec[2]), Vec3_$ctor_Z7AD9E565(x_22, y_22, z_22))))))), (b_23 = ((a_80 = pixelDeltaV, (b_22 = (1 / 2), (x_23 = (a_80.vec[0] * b_22), (y_23 = (a_80.vec[1] * b_22), (z_23 = (a_80.vec[2] * b_22), Vec3_$ctor_Z7AD9E565(x_23, y_23, z_23))))))), (x_24 = (a_84.vec[0] + b_23.vec[0]), (y_24 = (a_84.vec[1] + b_23.vec[1]), (z_24 = (a_84.vec[2] + b_23.vec[2]), Vec3_$ctor_Z7AD9E565(x_24, y_24, z_24))))))), (width_2 = (width_1 | 0), (height_2 = (height_1 | 0), (buf_1 = (new Float64Array((width_2 * height_2) * 4)), ((() => {
        let a_122, a_123, b_29, a_156, a_157, b_34;
        for (let x_38 = 0; x_38 <= (width_2 - 1); x_38++) {
            for (let y_38 = 0; y_38 <= (height_2 - 1); y_38++) {
                const i = ((x_38 + (y_38 * width_2)) * 4) | 0;
                let patternInput;
                let pixelCenter;
                let a_106;
                const a_95 = pixel00Loc;
                let b_25;
                const a_91 = pixelDeltaU;
                const b_24 = x_38;
                const x_26 = a_91.vec[0] * b_24;
                const y_26 = a_91.vec[1] * b_24;
                const z_25 = a_91.vec[2] * b_24;
                b_25 = Vec3_$ctor_Z7AD9E565(x_26, y_26, z_25);
                const x_27 = a_95.vec[0] + b_25.vec[0];
                const y_27 = a_95.vec[1] + b_25.vec[1];
                const z_26 = a_95.vec[2] + b_25.vec[2];
                a_106 = Vec3_$ctor_Z7AD9E565(x_27, y_27, z_26);
                let b_27;
                const a_102 = pixelDeltaV;
                const b_26 = y_38;
                const x_28 = a_102.vec[0] * b_26;
                const y_28 = a_102.vec[1] * b_26;
                const z_27 = a_102.vec[2] * b_26;
                b_27 = Vec3_$ctor_Z7AD9E565(x_28, y_28, z_27);
                const x_29 = a_106.vec[0] + b_27.vec[0];
                const y_29 = a_106.vec[1] + b_27.vec[1];
                const z_28 = a_106.vec[2] + b_27.vec[2];
                pixelCenter = Vec3_$ctor_Z7AD9E565(x_29, y_29, z_28);
                let direction;
                const a_113 = pixelCenter;
                const b_28 = cam.origin;
                const x_30 = a_113.vec[0] - b_28.vec[0];
                const y_30 = a_113.vec[1] - b_28.vec[1];
                const z_29 = a_113.vec[2] - b_28.vec[2];
                direction = Vec3_$ctor_Z7AD9E565(x_30, y_30, z_29);
                const a_120 = direction;
                const a_131 = a_120;
                const b_31 = 1 / Math.sqrt((a_122 = a_120, (a_123 = a_122, (b_29 = a_122, ((a_123.vec[0] * b_29.vec[0]) + (a_123.vec[1] * b_29.vec[1])) + (a_123.vec[2] * b_29.vec[2])))));
                const x_31 = a_131.vec[0] * b_31;
                a_131.vec[0] = x_31;
                const y_31 = a_131.vec[1] * b_31;
                a_131.vec[1] = y_31;
                const z_30 = a_131.vec[2] * b_31;
                a_131.vec[2] = z_30;
                const r = new Ray(cam.origin, direction);
                let color_1 = fn(r);
                if (cam.sampleCount > 1) {
                    for (let forLoopVar = 2; forLoopVar <= cam.sampleCount; forLoopVar++) {
                        let center_4;
                        const a_140 = pixelCenter;
                        const b_32 = Vec3_$ctor_Z7AD9E565((Math.random() - 0.5) * pixelDeltaU.vec[0], (Math.random() - 0.5) * pixelDeltaV.vec[1], 0);
                        const x_33 = a_140.vec[0] + b_32.vec[0];
                        const y_33 = a_140.vec[1] + b_32.vec[1];
                        const z_32 = a_140.vec[2] + b_32.vec[2];
                        center_4 = Vec3_$ctor_Z7AD9E565(x_33, y_33, z_32);
                        let direction_1_1;
                        const a_147 = center_4;
                        const b_33 = cam.origin;
                        const x_34 = a_147.vec[0] - b_33.vec[0];
                        const y_34 = a_147.vec[1] - b_33.vec[1];
                        const z_33 = a_147.vec[2] - b_33.vec[2];
                        direction_1_1 = Vec3_$ctor_Z7AD9E565(x_34, y_34, z_33);
                        const a_154 = direction_1_1;
                        const a_165 = a_154;
                        const b_36 = 1 / Math.sqrt((a_156 = a_154, (a_157 = a_156, (b_34 = a_156, ((a_157.vec[0] * b_34.vec[0]) + (a_157.vec[1] * b_34.vec[1])) + (a_157.vec[2] * b_34.vec[2])))));
                        const x_35 = a_165.vec[0] * b_36;
                        a_165.vec[0] = x_35;
                        const y_35 = a_165.vec[1] * b_36;
                        a_165.vec[1] = y_35;
                        const z_34 = a_165.vec[2] * b_36;
                        a_165.vec[2] = z_34;
                        const r_1 = new Ray(cam.origin, direction_1_1);
                        const a_172 = color_1;
                        const b_37 = fn(r_1);
                        const x_36 = a_172.vec[0] + b_37.vec[0];
                        a_172.vec[0] = x_36;
                        const y_36 = a_172.vec[1] + b_37.vec[1];
                        a_172.vec[1] = y_36;
                        const z_35 = a_172.vec[2] + b_37.vec[2];
                        a_172.vec[2] = z_35;
                    }
                }
                const a_183 = color_1;
                const b_39 = 1 / cam.sampleCount;
                const x_37 = a_183.vec[0] * b_39;
                a_183.vec[0] = x_37;
                const y_37 = a_183.vec[1] * b_39;
                a_183.vec[1] = y_37;
                const z_36 = a_183.vec[2] * b_39;
                a_183.vec[2] = z_36;
                const self = color_1;
                patternInput = [self.vec[0], self.vec[1], self.vec[2], 1];
                const r_2 = patternInput[0];
                const g = patternInput[1];
                const b_40 = patternInput[2];
                const a_194 = patternInput[3];
                buf_1[i] = r_2;
                buf_1[i + 1] = g;
                buf_1[i + 2] = b_40;
                buf_1[i + 3] = a_194;
            }
        }
    })(), buf_1))))))))))))))))))));
})();

newData.data.set(buf);

ctx.putImageData(newData, 0, 0);

