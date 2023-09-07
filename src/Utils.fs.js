import { compare } from "../fable_modules/fable-library.4.1.4/Util.js";

export function clamp(min, max, v) {
    if (compare(v, min) < 0) {
        return min;
    }
    else if (compare(v, max) > 0) {
        return max;
    }
    else {
        return v;
    }
}

