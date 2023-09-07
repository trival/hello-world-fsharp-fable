module Scene

open Image
open Vectors.Vec3F64
open Shapes

let width = 400
let height = 300

let render () =
  let cam =
    { defaultCamera with
        focalLength = 1.1
        sampleCount = 40 }

  let world =
    HittableList(
      [ HittableList(
          [ sphere (vec3 0 0 -1) 0.5
            sphere (vec3 -1 0 -1) 0.5
            sphere (vec3 1 0 -1) 0.5 ]
        )
        sphere (vec3 0 -100.5 -1) 100.0 ]
    )

  renderRays width height cam (fun ray ->
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
