/** Create variables with random numeric values */
let numObjects = Math.floor(Math.random()*5)
const maxObjects = Math.floor(Math.random()*15)+10

/** Create an odd iteratable object */
const oddObject = {
  [Symbol.iterator]: ()=>{
    return {
      next: () => {
        /** Add a random number to numObjects */
        numObjects += Math.floor(Math.random()*3)+1
        /** Return numObjects as the value, and return done boolean if > max */
        return { value: numObjects, done: (numObjects>maxObjects) }
      }
    }
  }
}

/** for(.. of ..) loop calls an object's [Symbol.iterator].next() function
 *  v is set to the next() function's returned .value property
 *  the loop terminates when the next function returns .done = true
 */
for(v of oddObject){
  console.log(v)
}

