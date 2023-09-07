module Scene

open Image
open Vectors.Vec3F64
open Shapes

let width = 400
let height = 300

let samplesPerPixel = 10
let maxRayBounces = 10

let render () =
  let cam =
    { defaultCamera with
        focalLength = 1.1
        sampleCount = samplesPerPixel }

  let world =
    HittableList(
      [ HittableList(
          [ sphere (vec3 0 0 -1) 0.5
            sphere (vec3 -1 0 -1) 0.5
            sphere (vec3 1 0 -1) 0.5 ]
        )
        sphere (vec3 0 -100.5 -1) 100.0 ]
    )

  let image =
    renderRays width height cam (fun r ->

      let rec getColor r depth =
        match world.rayHit r 0.001 100000.0 with
        | None ->
          let t = 0.5 * (r.direction.y + 1.)
          let col1 = vec3 1 1 1
          let col2 = vec3 0.5 0.7 1
          col1.lerp col2 t

        | Some hit ->
          if depth > 0 then
            let direction = randomInUnitSphere ()
            direction += hit.normal
            direction.normalize ()
            let newRay = ray hit.p direction
            0.5 * getColor newRay (depth - 1)
          else
            vec3 0 0 0

      getColor r maxRayBounces)

  image |> Array.map (fun v -> v ** 0.7)
