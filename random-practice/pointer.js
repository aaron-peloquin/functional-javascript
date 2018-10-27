let object = {}
const a = "a.b".split(".")
const b = "b.a".split(".")
const c = "b.e.d".split(".")
let pointer;

const updatePointer = (pointer, key) => {
  if(typeof pointer[key] == 'undefined') {
    pointer[key] = {}
  }
  pointer = pointer[key]
  // object[pointer] = {}
  return pointer
}

const combineData = (data) => {
  pointer = object
  for(key in data) {
    let letter = data[key]
    pointer = updatePointer(pointer, letter)
  }
  pointer.value = "end"
}

combineData(a)
object //?

combineData(b)
object //?

combineData(c)
object //?