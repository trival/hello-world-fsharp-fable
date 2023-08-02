open Browser

printfn "Hello from F#"

let div = document.createElement "div"
div.innerHTML <- "Hello world form F#!"
document.body.appendChild div |> ignore

let add x y = x + y

printf "1 + 2 = %f" (add 1.0 2.0)
