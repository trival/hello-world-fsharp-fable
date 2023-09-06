module Program

open Browser
open Fable.Core.JsInterop
open Image
open Vectors.Vec3F64
open Shapes

let div = document.createElement "div"
div.innerHTML <- "Hello F# ray tracer!"
document.body.appendChild div |> ignore

let width = 400
let height = 300

let canvas = document.getElementById "canvas" :?> Types.HTMLCanvasElement
canvas.width <- width
canvas.height <- height

emitJsStatement () "canvas.style.transform = 'scale(2)'"
emitJsStatement () "canvas.style.transformOrigin = '0 0'"

let ctx = canvas.getContext_2d ()


let colorBufferToBytes (buf: float array) =
  buf |> Array.map (fun v -> byte (v * 255.))

let newData = ImageData.Create(width, height)

let buf =
  let world =
    HittableList(
      seq {
        yield sphere (vec3 0 0 -1) 0.5
        yield sphere (vec3 -1 0 -1) 0.5
        yield sphere (vec3 1 0 -1) 0.5
        yield sphere (vec3 0 -100.5 -1) 100.0
      }
    )

  (colorBufferToBytes (
    renderRays
      width
      height
      { defaultCamera with
          focalLength = 1.1
          sampleCount = 4 }
      (fun ray ->
        let hit = world.rayHit ray 0.0 100000.0

        let color =
          match hit with
          | Miss ->
            let t = 0.5 * (ray.direction.y + 1.)
            let col1 = vec3 1 1 1
            let col2 = vec3 0.5 0.7 1
            col1.lerp col2 t

          | Hit hit ->
            let n = hit.normal
            0.5 * (n + 1.)

        color)
  ))

emitJsStatement () "newData.data.set(buf)"

ctx.putImageData (newData, 0.0, 0.0)
