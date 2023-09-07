module Shapes

open Vectors.Vec3F64

type Ray =
  { origin: Vec3
    direction: Vec3 }

  member r.at(t: float) = r.origin + t * r.direction

let inline ray origin direction =
  { origin = origin
    direction = direction }

type Hit =
  { t: float
    p: Vec3
    normal: Vec3
    frontFace: bool }


let inline hit t p (normal: Vec3) =
  let frontFace = normal.dot p < 0.

  { t = t
    p = p
    normal = if frontFace then normal else normal * -1.
    frontFace = frontFace }


type Hittable =
  abstract member rayHit: Ray -> minT: float -> maxT: float -> Hit option

type Sphere =
  { center: Vec3
    radius: float }

  member inline s.rayHit ray minT maxT = (s :> Hittable).rayHit ray minT maxT

  interface Hittable with
    member s.rayHit ray minT maxT =

      let oc = ray.origin - s.center
      let halfB = oc.dot ray.direction
      let c = oc.lengthSquared () - s.radius * s.radius
      let discriminant = halfB * halfB - c

      if discriminant < 0. then
        None
      else
        let sqrtD = sqrt discriminant
        let mutable t = (-halfB - sqrtD)

        if t < minT || t > maxT then
          t <- (-halfB + sqrtD)

          if t < minT || t > maxT then
            t <- -1

        if t < 0 then
          None
        else
          let p = ray.at t

          Some(hit t p ((p - s.center) / s.radius))


let inline sphere center radius = { center = center; radius = radius }


type HittableList(hs: Hittable seq) =
  member inline s.rayHit ray minT maxT = (s :> Hittable).rayHit ray minT maxT

  interface Hittable with
    member _.rayHit ray minT maxT =
      let mutable closestSoFar = maxT
      let mutable closestHit = None

      for h in hs do
        match h.rayHit ray minT closestSoFar with
        | Some hit ->
          closestSoFar <- hit.t
          closestHit <- Some hit
        | None -> ()

      closestHit
