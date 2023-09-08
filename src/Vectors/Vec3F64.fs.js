import { class_type } from "../../fable_modules/fable-library.4.1.4/Reflection.js";

export class Vec3 {
    constructor(_x, _y, _z) {
        this.X = _x;
        this.Y = _y;
        this.Z = _z;
    }
    toString() {
        let copyOfStruct, copyOfStruct_1, copyOfStruct_2;
        const a = this;
        return ((((("Vec3(" + ((copyOfStruct = a.X, copyOfStruct.toString()))) + ",") + ((copyOfStruct_1 = a.Y, copyOfStruct_1.toString()))) + ",") + ((copyOfStruct_2 = a.Z, copyOfStruct_2.toString()))) + ")";
    }
}

export function Vec3_$reflection() {
    return class_type("Vectors.Vec3F64.Vec3", void 0, Vec3);
}

export function Vec3_$ctor_Z7AD9E565(_x, _y, _z) {
    return new Vec3(_x, _y, _z);
}

