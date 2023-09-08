module Vectors.Vec3F64

open Utils

type Vec3(_x: float, _y: float, _z: float) =

  let mutable X = _x
  let mutable Y = _y
  let mutable Z = _z

  member inline _.x
    with get () = X
    and set x = X <- x

  member inline _.y
    with get () = Y
    and set y = Y <- y

  member inline _.z
    with get () = Z
    and set z = Z <- z

  static member inline (+)(a: Vec3, b: Vec3) =
    let x = a.x + b.x
    let y = a.y + b.y
    let z = a.z + b.z
    Vec3(x, y, z)

  static member inline (+)(a: Vec3, b: float) =
    let x = a.x + b
    let y = a.y + b
    let z = a.z + b
    Vec3(x, y, z)

  static member inline (+=)(a: Vec3, b: Vec3) =
    a.x <- a.x + b.x
    a.y <- a.y + b.y
    a.z <- a.z + b.z

  static member inline (+=)(a: Vec3, b: float) =
    a.x <- a.x + b
    a.y <- a.y + b
    a.z <- a.z + b

  static member inline (-)(a: Vec3, b: float) =
    let x = a.x - b
    let y = a.y - b
    let z = a.z - b
    Vec3(x, y, z)

  static member inline (-)(a: Vec3, b: Vec3) =
    let x = a.x - b.x
    let y = a.y - b.y
    let z = a.z - b.z
    Vec3(x, y, z)

  static member inline (-=)(a: Vec3, b: Vec3) =
    a.x <- a.x - b.x
    a.y <- a.y - b.y
    a.z <- a.z - b.z

  static member inline (-=)(a: Vec3, b: float) =
    a.x <- a.x - b
    a.y <- a.y - b
    a.z <- a.z - b

  static member inline (*)(a: Vec3, b: Vec3) =
    let x = a.x * b.x
    let y = a.y * b.y
    let z = a.z * b.z
    Vec3(x, y, z)

  static member inline (*)(a: Vec3, b: float) =
    let x = a.x * b
    let y = a.y * b
    let z = a.z * b
    Vec3(x, y, z)

  static member inline (*)(a: float, b: Vec3) = b * a

  static member inline ( *= )(a: Vec3, b: Vec3) =
    a.x <- a.x * b.x
    a.y <- a.y * b.y
    a.z <- a.z * b.z

  static member inline ( *= )(a: Vec3, b: float) =
    a.x <- a.x * b
    a.y <- a.y * b
    a.z <- a.z * b

  static member inline (/)(a: Vec3, b: float) = a * (1.0 / b)

  static member inline (/=)(a: Vec3, b: float) = a *= (1.0 / b)

  member inline a.dot(b: Vec3) = a.x * b.x + a.y * b.y + a.z * b.z

  member inline a.cross(b: Vec3) =
    let x = a.y * b.z - a.z * b.y
    let y = a.z * b.x - a.x * b.z
    let z = a.x * b.y - a.y * b.x
    Vec3(x, y, z)

  member inline a.lengthSquared() = a.dot a

  member inline a.length() = sqrt (a.lengthSquared ())

  /// creates a normalized copy of this vector
  member inline a.normalized() = a / a.length ()

  /// normalizes this vector in place
  member inline a.normalize() = a /= a.length ()

  member inline a.lerp (b: Vec3) (t: float) = a * (1.0 - t) + b * t

  member inline self.toRgba a = (self.x, self.y, self.z, a)

  member inline self.toRgb = self.toRgba 1.0

  member inline self.nearZero() =
    let s = 1e-6
    self.lengthSquared () < s

  override a.ToString() =
    "Vec3(" + a.x.ToString() + "," + a.y.ToString() + "," + a.z.ToString() + ")"

let inline vec3 x y z = Vec3(x, y, z)

let inline vec3_1 x = Vec3(x, x, x)

let inline randomVec3 () =
  vec3 (random ()) (random ()) (random ())

let inline randomRangeVec3 (min: Vec3) (max: Vec3) =
  vec3 (randomRange min.x max.x) (randomRange min.y max.y) (randomRange min.z max.z)

let inline randomInUnitSphere () =
  let rec loop () =
    let p = randomRangeVec3 (vec3_1 -1.0) (vec3_1 1.0)
    if p.lengthSquared () >= 1.0 then loop () else p

  loop ()

let inline randomUnitVector () =
  let n = randomInUnitSphere ()
  n.normalize ()
  n

let inline randomInHemisphere (normal: Vec3) =
  let inUnitSphere = randomInUnitSphere ()

  if inUnitSphere.dot normal < 0.0 then
    inUnitSphere *= -1.0

  inUnitSphere
