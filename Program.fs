module Program

open Browser
open Fable.Core.JsInterop
open Image
open Vectors.Vec3F64
open Shapes

let div = document.createElement "div"
div.innerHTML <- "Hello F# ray tracer!"
document.body.appendChild div |> ignore

let width = 800
let height = 600

let canvas = document.getElementById "canvas" :?> Types.HTMLCanvasElement
canvas.width <- width
canvas.height <- height

let ctx = canvas.getContext_2d ()


let colorBufferToBytes (buf: float array) =
  buf |> Array.map (fun v -> byte (v * 255.))

let newData = ImageData.Create(width, height)

let buf =
  let s = sphere (vec3 0 0 -1) 0.5

  (colorBufferToBytes (
    renderRays width height (fun r ->
      let sphereHit = intersectRaySphere r s

      if sphereHit > 0 then
        let n = (r.at sphereHit) - s.center
        n.normalize ()
        (0.5 * (n + 1.)).toRgba 1

      else
        let t = 0.5 * (r.direction.y () + 1.)
        let col1 = vec3 1 1 1
        let col2 = vec3 0.5 0.7 1
        let res = col1.lerp col2 t
        res.toRgba 1)
  ))

emitJsStatement () "newData.data.set(buf)"

ctx.putImageData (newData, 0.0, 0.0)
