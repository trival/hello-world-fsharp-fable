module Image

open Utils
open Shapes
open Vectors.Vec3F64
open Browser

let inline renderImage width height (fn: int -> int -> float * float * float * float) =
  let buf = Array.zeroCreate (width * height * 4)

  for y in 0 .. height - 1 do
    console.log ("Rendering image row", y + 1)

    for x in 0 .. width - 1 do
      let i = (x + y * width) * 4
      let (r, g, b, a) = fn x y
      buf[i] <- r
      buf[i + 1] <- g
      buf[i + 2] <- b
      buf[i + 3] <- a

  buf


type Camera =
  { focalLength: float
    origin: Vec3
    direction: Vec3
    sampleCount: int }

let defaultCamera =
  { focalLength = 1.
    origin = vec3 0 0 0
    direction = vec3 0 0 -1
    sampleCount = 1 }


let inline renderRays width height (cam: Camera) (fn: Ray -> Vec3) =
  let w = float width
  let h = float height

  let aspectRatio = w / h
  let viewportHeight = 2.
  let viewportWidth = aspectRatio * viewportHeight

  let viewportU = vec3 viewportWidth 0 0
  let viewportV = vec3 0 -viewportHeight 0

  let pixelDeltaU = viewportU / w
  let pixelDeltaV = viewportV / h

  let viewportTopLeft =
    cam.origin - viewportU / 2. - viewportV / 2. - (vec3 0 0 cam.focalLength)

  let pixel00Loc = viewportTopLeft + pixelDeltaU / 2. + pixelDeltaV / 2.

  renderImage width height (fun x y ->
    let pixelCenter = pixel00Loc + pixelDeltaU * float x + pixelDeltaV * float y

    let direction = pixelCenter - cam.origin
    direction.normalize ()
    let r = ray cam.origin direction
    let mutable color = fn r

    if cam.sampleCount > 1 then
      for _ in 2 .. cam.sampleCount do
        let center =
          pixelCenter
          + vec3 ((random () - 0.5) * pixelDeltaU.x) ((random () - 0.5) * pixelDeltaV.y) 0.

        let direction = center - cam.origin
        direction.normalize ()
        let r = ray cam.origin direction
        color += fn r

    color /= float cam.sampleCount
    color.toRgba 1.)
