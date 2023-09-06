module Shapes

open Vectors.Vec3F64

type Ray =
  { origin: Vec3
    direction: Vec3 }

  member r.at(t: float) = r.origin + t * r.direction

let inline ray origin direction =
  { origin = origin
    direction = direction }


type Sphere = { center: Vec3; radius: float }

let inline sphere center radius = { center = center; radius = radius }


// intersections

let intersectRaySphere ray sphere =
  let oc = ray.origin - sphere.center
  let a = ray.direction.lengthSquared ()
  let halfB = oc.dot ray.direction
  let c = oc.lengthSquared () - sphere.radius * sphere.radius
  let discriminant = halfB * halfB - a * c

  if discriminant < 0. then
    -1.
  else
    (-halfB - (sqrt discriminant)) / a
