import { printf, toConsole } from "./fable_modules/fable-library.4.1.4/String.js";
import { Vec3_$ctor_Z7AD9E565 } from "./src/./Vectors.fs.js";
import { toString } from "./fable_modules/fable-library.4.1.4/Types.js";

toConsole(printf("Hello from F#"));

export const div = document.createElement("div");

div.innerHTML = "Hello world form F#!";

document.body.appendChild(div);

export function add(x, y) {
    return x + y;
}

export const color = Vec3_$ctor_Z7AD9E565(1, 0, 0);

export const color2 = Vec3_$ctor_Z7AD9E565(0, 1, 1);

export const cross = (() => {
    const a = color;
    const b = color2;
    return Vec3_$ctor_Z7AD9E565((a.vec[1] * b.vec[2]) - (a.vec[2] * b.vec[1]), (a.vec[2] * b.vec[0]) - (a.vec[0] * b.vec[2]), (a.vec[0] * b.vec[1]) - (a.vec[1] * b.vec[0]));
})();

(function () {
    const arg = add(1, 2);
    toConsole(printf("1 + 2 = %f"))(arg);
})();

(function () {
    const arg = toString(cross);
    const arg_1 = Math.sqrt((() => {
        const a_1 = cross;
        const a_2 = a_1;
        const b = a_1;
        return ((a_2.vec[0] * b.vec[0]) + (a_2.vec[1] * b.vec[1])) + (a_2.vec[2] * b.vec[2]);
    })());
    toConsole(printf("%s %f"))(arg)(arg_1);
})();

