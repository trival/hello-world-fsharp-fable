module Program

open Browser
open Vectors.Vec3F64

printfn "Hello from F#"

let div = document.createElement "div"
div.innerHTML <- "Hello world form F#!"
document.body.appendChild div |> ignore

let width = 800
let height = 600

let canvas = document.getElementById "canvas" :?> Types.HTMLCanvasElement
canvas.width <- width
canvas.height <- height

let ctx = canvas.getContext_2d ()
