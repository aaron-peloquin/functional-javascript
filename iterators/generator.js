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

/** Get 5 numbers */
for(let i = 0; i<5; i++) {
  let value = number_generator().next().value
  console.log(value)
}
