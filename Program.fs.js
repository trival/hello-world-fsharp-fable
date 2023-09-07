import { render, height, width } from "./src/Scene.fs.js";
import { map } from "./fable_modules/fable-library.4.1.4/Array.js";

export const div = document.createElement("div");

div.innerHTML = "Hello F# ray tracer!";

document.body.appendChild(div);

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

export const buf = colorBufferToBytes(render());

newData.data.set(buf);

ctx.putImageData(newData, 0, 0);

