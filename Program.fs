module Program

open Browser
open Vectors.Vec3F64

printfn "Hello from F#"

let div = document.createElement "div"
div.innerHTML <- "Hello world form F#!"
document.body.appendChild div |> ignore

let add x y = x + y

let color = vec3 1. 0. 0.
let color2 = vec3 0. 1. 1.
let cross = color.cross color2


printf "1 + 2 = %f" (add 1.0 2.0)
printf "%s %f" (cross.ToString()) (cross.length ())
