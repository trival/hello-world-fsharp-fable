import { printf, toConsole } from "./fable_modules/fable-library.4.1.4/String.js";

toConsole(printf("Hello from F#"));

export const div = document.createElement("div");

div.innerHTML = "Hello world form F#!";

document.body.appendChild(div);

export const width = 800;

export const height = 600;

export const canvas = document.getElementById("canvas");

canvas.width = width;

canvas.height = height;

export const ctx = canvas.getContext('2d');

