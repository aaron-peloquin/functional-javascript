/**
 * Returns a semi-random semi-incrimenting number.
 */
const number_generator = function* () {
  let i = 5
  while(true){
    i++
    /** Yield result of i + random number */
    yield Math.ceil(i+(Math.random()*2))
  }
}

let num_gen = number_generator()
/** Get 5 numbers */
for(let i = 0; i<5; i++) {
  let value = num_gen.next().value
  console.log(value)
}

/** Ohhhh! Only continues to the next yield when referring to an
 * instance of the function (via a variable) 
 */
function* another_generator() {
  yield "good"
  yield "morning"
  yield "world"
  return
}

let another = another_generator()
console.log(another.next().value) /** Returns "good" */
console.log(another.next().value) /** Returns "morning" */
console.log(another_generator().next().value) /** returns "good" */