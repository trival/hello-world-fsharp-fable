module Program

open Browser
open Fable.Core.JsInterop
open Scene

let div = document.createElement "div"
div.innerHTML <- "Hello F# ray tracer!"
document.body.appendChild div |> ignore

let canvas = document.getElementById "canvas" :?> Types.HTMLCanvasElement
canvas.width <- width
canvas.height <- height

emitJsStatement () "canvas.style.transform = 'scale(2)'"
emitJsStatement () "canvas.style.transformOrigin = '0 0'"

let ctx = canvas.getContext_2d ()


let colorBufferToBytes (buf: float array) =
  buf |> Array.map (fun v -> byte (v * 255.))

let newData = ImageData.Create(width, height)

let buf = colorBufferToBytes (render ())

emitJsStatement () "newData.data.set(buf)"

ctx.putImageData (newData, 0.0, 0.0)
