import { map } from "./fable_modules/fable-library.4.1.4/Array.js";
import { Vec3_$ctor_Z7AD9E565 } from "./src/Vectors/./Vec3F64.fs.js";
import { Ray__at_5E38073B, intersectRaySphere, Ray, Sphere } from "./src/Shapes.fs.js";

export const div = document.createElement("div");

div.innerHTML = "Hello F# ray tracer!";

document.body.appendChild(div);

export const width = 800;

export const height = 600;

export const canvas = document.getElementById("canvas");

canvas.width = width;

canvas.height = height;

export const ctx = canvas.getContext('2d');

export function colorBufferToBytes(buf_1) {
    return map((v) => ((v * 255) & 0xFF), buf_1, Uint8Array);
}

export const newData = new ImageData(width, height);

export const buf = (() => {
    let width_1, height_1, w, h, focalLength, origin, aspectRatio, viewportHeight, viewportWidth, viewportU, viewportV, pixelDeltaU, a_60, b_12, x_13, y_13, z_13, pixelDeltaV, a_65, b_14, x_14, y_14, z_14, viewportTopLeft, a_93, a_86, a_74, b_17, a_70, b_16, x_15, y_15, z_15, x_16, y_16, z_16, b_20, a_82, b_19, x_17, y_17, z_17, x_18, y_18, z_18, b_21, x_20, y_20, z_20, pixel00Loc, a_117, a_105, b_24, a_101, b_23, x_21, y_21, z_21, x_22, y_22, z_22, b_27, a_113, b_26, x_23, y_23, z_23, x_24, y_24, z_24, width_2, height_2, buf_1;
    const s = new Sphere(Vec3_$ctor_Z7AD9E565(0, 0, -1), 0.5);
    return colorBufferToBytes((width_1 = (width | 0), (height_1 = (height | 0), (w = width_1, (h = height_1, (focalLength = 1, (origin = Vec3_$ctor_Z7AD9E565(0, 0, 0), (aspectRatio = (w / h), (viewportHeight = 2, (viewportWidth = (aspectRatio * viewportHeight), (viewportU = Vec3_$ctor_Z7AD9E565(viewportWidth, 0, 0), (viewportV = Vec3_$ctor_Z7AD9E565(0, -viewportHeight, 0), (pixelDeltaU = ((a_60 = viewportU, (b_12 = (1 / w), (x_13 = (a_60.vec[0] * b_12), (y_13 = (a_60.vec[1] * b_12), (z_13 = (a_60.vec[2] * b_12), Vec3_$ctor_Z7AD9E565(x_13, y_13, z_13))))))), (pixelDeltaV = ((a_65 = viewportV, (b_14 = (1 / h), (x_14 = (a_65.vec[0] * b_14), (y_14 = (a_65.vec[1] * b_14), (z_14 = (a_65.vec[2] * b_14), Vec3_$ctor_Z7AD9E565(x_14, y_14, z_14))))))), (viewportTopLeft = ((a_93 = ((a_86 = ((a_74 = origin, (b_17 = ((a_70 = viewportU, (b_16 = (1 / 2), (x_15 = (a_70.vec[0] * b_16), (y_15 = (a_70.vec[1] * b_16), (z_15 = (a_70.vec[2] * b_16), Vec3_$ctor_Z7AD9E565(x_15, y_15, z_15))))))), (x_16 = (a_74.vec[0] - b_17.vec[0]), (y_16 = (a_74.vec[1] - b_17.vec[1]), (z_16 = (a_74.vec[2] - b_17.vec[2]), Vec3_$ctor_Z7AD9E565(x_16, y_16, z_16))))))), (b_20 = ((a_82 = viewportV, (b_19 = (1 / 2), (x_17 = (a_82.vec[0] * b_19), (y_17 = (a_82.vec[1] * b_19), (z_17 = (a_82.vec[2] * b_19), Vec3_$ctor_Z7AD9E565(x_17, y_17, z_17))))))), (x_18 = (a_86.vec[0] - b_20.vec[0]), (y_18 = (a_86.vec[1] - b_20.vec[1]), (z_18 = (a_86.vec[2] - b_20.vec[2]), Vec3_$ctor_Z7AD9E565(x_18, y_18, z_18))))))), (b_21 = Vec3_$ctor_Z7AD9E565(0, 0, focalLength), (x_20 = (a_93.vec[0] - b_21.vec[0]), (y_20 = (a_93.vec[1] - b_21.vec[1]), (z_20 = (a_93.vec[2] - b_21.vec[2]), Vec3_$ctor_Z7AD9E565(x_20, y_20, z_20))))))), (pixel00Loc = ((a_117 = ((a_105 = viewportTopLeft, (b_24 = ((a_101 = pixelDeltaU, (b_23 = (1 / 2), (x_21 = (a_101.vec[0] * b_23), (y_21 = (a_101.vec[1] * b_23), (z_21 = (a_101.vec[2] * b_23), Vec3_$ctor_Z7AD9E565(x_21, y_21, z_21))))))), (x_22 = (a_105.vec[0] + b_24.vec[0]), (y_22 = (a_105.vec[1] + b_24.vec[1]), (z_22 = (a_105.vec[2] + b_24.vec[2]), Vec3_$ctor_Z7AD9E565(x_22, y_22, z_22))))))), (b_27 = ((a_113 = pixelDeltaV, (b_26 = (1 / 2), (x_23 = (a_113.vec[0] * b_26), (y_23 = (a_113.vec[1] * b_26), (z_23 = (a_113.vec[2] * b_26), Vec3_$ctor_Z7AD9E565(x_23, y_23, z_23))))))), (x_24 = (a_117.vec[0] + b_27.vec[0]), (y_24 = (a_117.vec[1] + b_27.vec[1]), (z_24 = (a_117.vec[2] + b_27.vec[2]), Vec3_$ctor_Z7AD9E565(x_24, y_24, z_24))))))), (width_2 = (width_1 | 0), (height_2 = (height_1 | 0), (buf_1 = (new Float64Array((width_2 * height_2) * 4)), ((() => {
        let a_155, a_156, b_33, a_9, a_10, b_1;
        for (let x_32 = 0; x_32 <= (width_2 - 1); x_32++) {
            for (let y_32 = 0; y_32 <= (height_2 - 1); y_32++) {
                const i = ((x_32 + (y_32 * width_2)) * 4) | 0;
                let patternInput;
                let pixelCenter;
                let a_139;
                const a_128 = pixel00Loc;
                let b_29;
                const a_124 = pixelDeltaU;
                const b_28 = x_32;
                const x_26 = a_124.vec[0] * b_28;
                const y_26 = a_124.vec[1] * b_28;
                const z_25 = a_124.vec[2] * b_28;
                b_29 = Vec3_$ctor_Z7AD9E565(x_26, y_26, z_25);
                const x_27 = a_128.vec[0] + b_29.vec[0];
                const y_27 = a_128.vec[1] + b_29.vec[1];
                const z_26 = a_128.vec[2] + b_29.vec[2];
                a_139 = Vec3_$ctor_Z7AD9E565(x_27, y_27, z_26);
                let b_31;
                const a_135 = pixelDeltaV;
                const b_30 = y_32;
                const x_28 = a_135.vec[0] * b_30;
                const y_28 = a_135.vec[1] * b_30;
                const z_27 = a_135.vec[2] * b_30;
                b_31 = Vec3_$ctor_Z7AD9E565(x_28, y_28, z_27);
                const x_29 = a_139.vec[0] + b_31.vec[0];
                const y_29 = a_139.vec[1] + b_31.vec[1];
                const z_28 = a_139.vec[2] + b_31.vec[2];
                pixelCenter = Vec3_$ctor_Z7AD9E565(x_29, y_29, z_28);
                let direction;
                const a_146 = pixelCenter;
                const b_32 = origin;
                const x_30 = a_146.vec[0] - b_32.vec[0];
                const y_30 = a_146.vec[1] - b_32.vec[1];
                const z_29 = a_146.vec[2] - b_32.vec[2];
                direction = Vec3_$ctor_Z7AD9E565(x_30, y_30, z_29);
                const a_153 = direction;
                const a_164 = a_153;
                const b_35 = 1 / Math.sqrt((a_155 = a_153, (a_156 = a_155, (b_33 = a_155, ((a_156.vec[0] * b_33.vec[0]) + (a_156.vec[1] * b_33.vec[1])) + (a_156.vec[2] * b_33.vec[2])))));
                const x_31 = a_164.vec[0] * b_35;
                a_164.vec[0] = x_31;
                const y_31 = a_164.vec[1] * b_35;
                a_164.vec[1] = y_31;
                const z_30 = a_164.vec[2] * b_35;
                a_164.vec[2] = z_30;
                const r_1 = new Ray(origin, direction);
                const r = r_1;
                const sphereHit = intersectRaySphere(r, s);
                if (sphereHit > 0) {
                    let n;
                    const a = Ray__at_5E38073B(r, sphereHit);
                    const b = s.center;
                    const x_1 = a.vec[0] - b.vec[0];
                    const y_1 = a.vec[1] - b.vec[1];
                    const z_1 = a.vec[2] - b.vec[2];
                    n = Vec3_$ctor_Z7AD9E565(x_1, y_1, z_1);
                    const a_7 = n;
                    const a_18 = a_7;
                    const b_3 = 1 / Math.sqrt((a_9 = a_7, (a_10 = a_9, (b_1 = a_9, ((a_10.vec[0] * b_1.vec[0]) + (a_10.vec[1] * b_1.vec[1])) + (a_10.vec[2] * b_1.vec[2])))));
                    const x_2 = a_18.vec[0] * b_3;
                    a_18.vec[0] = x_2;
                    const y_2 = a_18.vec[1] * b_3;
                    a_18.vec[1] = y_2;
                    const z_2 = a_18.vec[2] * b_3;
                    a_18.vec[2] = z_2;
                    let self;
                    let a_30;
                    const a_25 = n;
                    const x_3 = a_25.vec[0] + 1;
                    const y_3 = a_25.vec[1] + 1;
                    const z_3 = a_25.vec[2] + 1;
                    a_30 = Vec3_$ctor_Z7AD9E565(x_3, y_3, z_3);
                    const x_4 = a_30.vec[0] * 0.5;
                    const y_4 = a_30.vec[1] * 0.5;
                    const z_4 = a_30.vec[2] * 0.5;
                    self = Vec3_$ctor_Z7AD9E565(x_4, y_4, z_4);
                    patternInput = [self.vec[0], self.vec[1], self.vec[2], 1];
                }
                else {
                    const t = 0.5 * (r.direction.vec[1] + 1);
                    const col1 = Vec3_$ctor_Z7AD9E565(1, 1, 1);
                    const col2 = Vec3_$ctor_Z7AD9E565(0.5, 0.7, 1);
                    let res;
                    const t_1 = t;
                    let a_48;
                    const a_40 = col1;
                    const b_8 = 1 - t_1;
                    const x_7 = a_40.vec[0] * b_8;
                    const y_7 = a_40.vec[1] * b_8;
                    const z_7 = a_40.vec[2] * b_8;
                    a_48 = Vec3_$ctor_Z7AD9E565(x_7, y_7, z_7);
                    let b_10;
                    const a_44 = col2;
                    const b_9 = t_1;
                    const x_8 = a_44.vec[0] * b_9;
                    const y_8 = a_44.vec[1] * b_9;
                    const z_8 = a_44.vec[2] * b_9;
                    b_10 = Vec3_$ctor_Z7AD9E565(x_8, y_8, z_8);
                    const x_9 = a_48.vec[0] + b_10.vec[0];
                    const y_9 = a_48.vec[1] + b_10.vec[1];
                    const z_9 = a_48.vec[2] + b_10.vec[2];
                    res = Vec3_$ctor_Z7AD9E565(x_9, y_9, z_9);
                    const self_1 = res;
                    patternInput = [self_1.vec[0], self_1.vec[1], self_1.vec[2], 1];
                }
                const r_2 = patternInput[0];
                const g = patternInput[1];
                const b_36 = patternInput[2];
                const a_171 = patternInput[3];
                buf_1[i] = r_2;
                buf_1[i + 1] = g;
                buf_1[i + 2] = b_36;
                buf_1[i + 3] = a_171;
            }
        }
    })(), buf_1))))))))))))))))))));
})();

newData.data.set(buf);

ctx.putImageData(newData, 0, 0);

