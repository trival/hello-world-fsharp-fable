import { Record } from "../fable_modules/fable-library.4.1.4/Types.js";
import { record_type, int32_type, float64_type } from "../fable_modules/fable-library.4.1.4/Reflection.js";
import { Vec3_$reflection } from "./Vectors/Vec3F64.fs.js";
import { Vec3_$ctor_Z7AD9E565 } from "./Vectors/./Vec3F64.fs.js";

export class Camera extends Record {
    constructor(focalLength, origin, direction, sampleCount) {
        super();
        this.focalLength = focalLength;
        this.origin = origin;
        this.direction = direction;
        this.sampleCount = (sampleCount | 0);
    }
}

export function Camera_$reflection() {
    return record_type("Image.Camera", [], Camera, () => [["focalLength", float64_type], ["origin", Vec3_$reflection()], ["direction", Vec3_$reflection()], ["sampleCount", int32_type]]);
}

export const defaultCamera = new Camera(1, Vec3_$ctor_Z7AD9E565(0, 0, 0), Vec3_$ctor_Z7AD9E565(0, 0, -1), 1);

