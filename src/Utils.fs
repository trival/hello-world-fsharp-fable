module Utils

open Fable.Core

let clamp min max v =
  if v < min then min
  elif v > max then max
  else v


let inline random () = JS.Math.random ()

let inline randomRange min max = min + (max - min) * random ()
