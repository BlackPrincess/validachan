export class ObjectUtil {
  static tuplesToObject(tuples) { 
    const obj = Object.create(null)
    tuples.forEach((a) => {
      obj[a[0]] = a[1]
    })
    return obj
  }
}
