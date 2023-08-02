import { printf, toConsole } from "./fable_modules/fable-library.4.1.4/String.js";

toConsole(printf("Hello from F#"));

export const div = document.createElement("div");

div.innerHTML = "Hello world form F#!";

document.body.appendChild(div);

export function add(x, y) {
    return x + y;
}

export const result = add(1, 3);

(function () {
    const arg = add(1, 2);
    toConsole(printf("1 + 2 = %f"))(arg);
})();

