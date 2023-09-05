module Shapes

open Vectors.Vec3F64

type Ray =
  { origin: Vec3
    direction: Vec3 }

  member r.at(t: float) = r.origin + t * r.direction
