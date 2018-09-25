/**
 * Returns a semi-random semi-incrimenting number.
 */
var i = 4
function* number_generator() {
  while(true){
    i++
    /** Yield result of i + random number */
    yield Math.ceil(i+(Math.random()*4))
  }
}

for(let i = 1; i<10; i++) {
  let value = number_generator().next().value
  console.log(value)
}
