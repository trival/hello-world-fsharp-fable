import { render, height, width } from "./src/Scene.fs.js";
import { map } from "./fable_modules/fable-library.4.1.4/Array.js";
import { clamp } from "./src/Utils.fs.js";

export const canvas = document.getElementById("canvas");

canvas.width = width;

canvas.height = height;

canvas.style.width = `${(width * 2)}px`;

canvas.style.height = `${(height * 2)}px`;

canvas.style.background = 'black';

export const div = document.createElement("div");

div.innerHTML = "rendering...";

document.body.appendChild(div);

export const ctx = canvas.getContext('2d');

export function colorBufferToBytes(buf) {
    return map((v) => ((clamp(0, 1, v) * 255) & 0xFF), buf, Uint8Array);
}

export function start() {
    const timeBefore = Date.now();
    const buf = colorBufferToBytes(render());
    const timeAfter = Date.now();
    const newData = new ImageData(width, height);
    newData.data.set(buf);
    ctx.putImageData(newData, 0, 0);
    div.innerHTML = (("done! (took " + (timeAfter - timeBefore).toString()) + "ms)");
}

window.setTimeout(() => {
    start();
}, 100);

