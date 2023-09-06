import { class_type } from "../../fable_modules/fable-library.4.1.4/Reflection.js";

export class Vec3 {
    constructor(x, y, z) {
        this.vec = (new Float64Array([x, y, z]));
    }
    toString() {
        let copyOfStruct, copyOfStruct_1, copyOfStruct_2;
        const a = this;
        return ((((("Vec3(" + ((copyOfStruct = a.vec[0], copyOfStruct.toString()))) + ",") + ((copyOfStruct_1 = a.vec[1], copyOfStruct_1.toString()))) + ",") + ((copyOfStruct_2 = a.vec[2], copyOfStruct_2.toString()))) + ")";
    }
}

export function Vec3_$reflection() {
    return class_type("Vectors.Vec3F64.Vec3", void 0, Vec3);
}

export function Vec3_$ctor_Z7AD9E565(x, y, z) {
    return new Vec3(x, y, z);
}

