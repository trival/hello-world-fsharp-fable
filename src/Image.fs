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


type RenderProps =
  { width: int
    height: int
    focalLength: float
    origin: Vec3
    direction: Vec3
    samplePerPixel: int
    maxRayBounces: int }

let defaultRenderProps =
  { width = 400
    height = 300
    focalLength = 1.
    origin = vec3 0 0 0
    direction = vec3 0 0 -1
    samplePerPixel = 1
    maxRayBounces = 10 }


let rec rayColor (r: Ray) (world: Hittable) (depth: int) =
  match world.rayHit r 0.001 100000.0 with
  | None ->
    let t = 0.5 * (r.direction.y + 1.)
    let col1 = vec3 1 1 1
    let col2 = vec3 0.5 0.7 1
    col1.lerp col2 t

  | Some hit ->
    if depth > 0 then
      let mutable direction = (randomUnitVector () + hit.normal).normalize ()

      if direction.nearZero () then
        direction <- hit.normal

      let newRay = ray hit.p direction
      0.5 * rayColor newRay world (depth - 1)
    else
      vec3 0 0 0

let inline renderRays (props: RenderProps) (world: Hittable) =
  let width = props.width
  let height = props.height

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
    props.origin - viewportU / 2. - viewportV / 2. - (vec3 0 0 props.focalLength)

  let pixel00Loc = viewportTopLeft + pixelDeltaU / 2. + pixelDeltaV / 2.

  renderImage width height (fun x y ->
    let pixelCenter = pixel00Loc + pixelDeltaU * float x + pixelDeltaV * float y

    let direction = (pixelCenter - props.origin).normalize ()
    let r = ray props.origin direction
    let mutable color = rayColor r world props.maxRayBounces

    if props.samplePerPixel > 1 then
      for _ in 2 .. props.samplePerPixel do
        let center =
          pixelCenter
          + vec3 ((random () - 0.5) * pixelDeltaU.x) ((random () - 0.5) * pixelDeltaV.y) 0.

        let direction = (center - props.origin).normalize ()
        let r = ray props.origin direction
        color += rayColor r world props.maxRayBounces

    color /= float props.samplePerPixel
    color.toRgba 1.)
