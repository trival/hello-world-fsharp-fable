module Shapes

open Vectors.Vec3F64

type Ray =
  { origin: Vec3
    direction: Vec3 }

  member r.at(t: float) = r.origin + t * r.direction

let inline ray origin direction =
  { origin = origin
    direction = direction }

type HitRecord =
  { t: float
    p: Vec3
    normal: Vec3
    frontFace: bool }

type HitResult =
  | Hit of HitRecord
  | Miss

let inline hit t p (normal: Vec3) =
  let frontFace = normal.dot p < 0.

  Hit
    { t = t
      p = p
      normal = if frontFace then normal else normal * -1.
      frontFace = frontFace }

type Hittable =
  abstract member rayHit: Ray -> minT: float -> maxT: float -> HitResult

type Sphere =
  { center: Vec3
    radius: float }

  member inline s.rayHit ray minT maxT = (s :> Hittable).rayHit ray minT maxT

  interface Hittable with
    member s.rayHit ray minT maxT =

      let oc = ray.origin - s.center
      let a = ray.direction.lengthSquared ()
      let halfB = oc.dot ray.direction
      let c = oc.lengthSquared () - s.radius * s.radius
      let discriminant = halfB * halfB - a * c

      if discriminant < 0. then
        Miss
      else
        let sqrtD = sqrt discriminant
        let mutable t = (-halfB - sqrtD) / a

        if t <= minT || t > maxT then
          t <- (-halfB + sqrtD) / a

          if t <= minT || t > maxT then
            t <- minT

        if t = minT then
          Miss
        else
          let p = ray.at t

          hit t p ((p - s.center) / s.radius)


let inline sphere center radius = { center = center; radius = radius }


type HittableList(hs: Hittable seq) =
  member inline s.rayHit ray minT maxT = (s :> Hittable).rayHit ray minT maxT

  interface Hittable with
    member this.rayHit ray minT maxT =
      let mutable closestSoFar = maxT
      let mutable closestHit = Miss

      for h in hs do
        match h.rayHit ray minT closestSoFar with
        | Hit hit ->
          closestSoFar <- hit.t
          closestHit <- Hit hit
        | Miss -> ()

      closestHit
