module Image

open Shapes
open Vectors.Vec3F64

let inline renderImage width height (fn: int -> int -> float * float * float * float) =
  let buf = Array.zeroCreate (width * height * 4)

  for x in 0 .. width - 1 do
    for y in 0 .. height - 1 do
      let i = (x + y * width) * 4
      let (r, g, b, a) = fn x y
      buf[i] <- r
      buf[i + 1] <- g
      buf[i + 2] <- b
      buf[i + 3] <- a

  buf

let inline renderRays width height (fn: Ray -> float * float * float * float) =

  let w = float width
  let h = float height

  let focalLength = 1.
  let origin = vec3 0 0 0

  let aspectRatio = w / h
  let viewportHeight = 2.
  let viewportWidth = aspectRatio * viewportHeight

  let viewportU = vec3 viewportWidth 0 0
  let viewportV = vec3 0 -viewportHeight 0

  let pixelDeltaU = viewportU / w
  let pixelDeltaV = viewportV / h

  let viewportTopLeft =
    origin - viewportU / 2. - viewportV / 2. - (vec3 0 0 focalLength)

  let pixel00Loc = viewportTopLeft + pixelDeltaU / 2. + pixelDeltaV / 2.

  renderImage width height (fun x y ->
    let pixelCenter = pixel00Loc + pixelDeltaU * float x + pixelDeltaV * float y
    let direction = pixelCenter - origin
    direction.normalize ()
    let r = ray origin direction
    fn r)
