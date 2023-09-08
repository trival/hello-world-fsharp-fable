module Scene

open Image
open Vectors.Vec3F64
open Shapes

let width = 400
let height = 300

let props =
  { defaultRenderProps with
      width = width
      height = height

      focalLength = 0.9
      samplePerPixel = 100
      maxRayBounces = 20 }

let render () =

  let world =
    HittableList(
      [ HittableList(
          [ sphere (vec3 0 0 -1) 0.5
            sphere (vec3 -1 0 -1) 0.5
            sphere (vec3 1 0 -1) 0.5 ]
        )
        sphere (vec3 0 -100.5 -1) 100.0 ]
    )

  let image = renderRays props world

  image |> Array.map (fun v -> v ** 0.7)
