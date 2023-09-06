module Vectors.Vec3F64

type Vec3(x: float, y: float, z: float) =

  let vec = [| x; y; z |]

  member inline a.x() = vec[0]
  member inline a.y() = vec[1]
  member inline a.z() = vec[2]

  member inline a.setX(x) = vec[0] <- x
  member inline a.setY(y) = vec[1] <- y
  member inline a.setZ(z) = vec[2] <- z

  static member inline (+)(a: Vec3, b: Vec3) =
    let x = a.x () + b.x ()
    let y = a.y () + b.y ()
    let z = a.z () + b.z ()
    Vec3(x, y, z)

  static member inline (+)(a: Vec3, b: float) =
    let x = a.x () + b
    let y = a.y () + b
    let z = a.z () + b
    Vec3(x, y, z)

  static member inline (+=)(a: Vec3, b: Vec3) =
    a.setX (a.x () + b.x ())
    a.setY (a.y () + b.y ())
    a.setZ (a.z () + b.z ())

  static member inline (+=)(a: Vec3, b: float) =
    a.setX (a.x () + b)
    a.setY (a.y () + b)
    a.setZ (a.z () + b)

  static member inline (-)(a: Vec3, b: float) =
    let x = a.x () - b
    let y = a.y () - b
    let z = a.z () - b
    Vec3(x, y, z)

  static member inline (-)(a: Vec3, b: Vec3) =
    let x = a.x () - b.x ()
    let y = a.y () - b.y ()
    let z = a.z () - b.z ()
    Vec3(x, y, z)

  static member inline (-=)(a: Vec3, b: Vec3) =
    a.setX (a.x () - b.x ())
    a.setY (a.y () - b.y ())
    a.setZ (a.z () - b.z ())

  static member inline (-=)(a: Vec3, b: float) =
    a.setX (a.x () - b)
    a.setY (a.y () - b)
    a.setZ (a.z () - b)

  static member inline (*)(a: Vec3, b: Vec3) =
    let x = a.x () * b.x ()
    let y = a.y () * b.y ()
    let z = a.z () * b.z ()
    Vec3(x, y, z)

  static member inline (*)(a: Vec3, b: float) =
    let x = a.x () * b
    let y = a.y () * b
    let z = a.z () * b
    Vec3(x, y, z)

  static member inline (*)(a: float, b: Vec3) = b * a

  static member inline ( *= )(a: Vec3, b: Vec3) =
    a.setX (a.x () * b.x ())
    a.setY (a.y () * b.y ())
    a.setZ (a.z () * b.z ())

  static member inline ( *= )(a: Vec3, b: float) =
    a.setX (a.x () * b)
    a.setY (a.y () * b)
    a.setZ (a.z () * b)

  static member inline (/)(a: Vec3, b: float) = a * (1.0 / b)

  static member inline (/=)(a: Vec3, b: float) = a *= (1.0 / b)

  member inline a.dot(b: Vec3) =
    a.x () * b.x () + a.y () * b.y () + a.z () * b.z ()

  member inline a.cross(b: Vec3) =
    Vec3(a.y () * b.z () - a.z () * b.y (), a.z () * b.x () - a.x () * b.z (), a.x () * b.y () - a.y () * b.x ())

  member inline a.lengthSquared() = a.dot a

  member inline a.length() = sqrt (a.lengthSquared ())

  /// creates a normalized copy of this vector
  member inline a.normalized() = a / a.length ()

  /// normalizes this vector in place
  member inline a.normalize() = a /= a.length ()

  member inline a.lerp (b: Vec3) (t: float) = a * (1.0 - t) + b * t

  member inline self.toRgba a = (self.x (), self.y (), self.z (), a)

  override a.ToString() =
    "Vec3("
    + a.x().ToString()
    + ","
    + a.y().ToString()
    + ","
    + a.z().ToString()
    + ")"

let inline vec3 x y z = Vec3(x, y, z)
