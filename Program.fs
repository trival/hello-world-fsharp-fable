module Program

open Browser
open Fable.Core.JsInterop
open Fable.Core
open Scene

let canvas = document.getElementById "canvas" :?> Types.HTMLCanvasElement
canvas.width <- width
canvas.height <- height

emitJsStatement (width * 2) "canvas.style.width = `${$0}px`"
emitJsStatement (height * 2) "canvas.style.height = `${$0}px`"
emitJsStatement () "canvas.style.background = 'black'"


let div = document.createElement "div"
div.innerHTML <- "rendering..."
document.body.appendChild div |> ignore

let ctx = canvas.getContext_2d ()

let colorBufferToBytes (buf: float array) =
  buf |> Array.map (fun v -> byte (v * 255.))

let start () =
  let timeBefore = JS.Constructors.Date.now ()
  let buf = colorBufferToBytes (render ())
  let timeAfter = JS.Constructors.Date.now ()

  let newData = ImageData.Create(width, height)
  emitJsStatement () "newData.data.set(buf)"
  ctx.putImageData (newData, 0.0, 0.0)

  div.innerHTML <- "done! (took " + string (timeAfter - timeBefore) + "ms)"

window.setTimeout (start, 100) |> ignore
