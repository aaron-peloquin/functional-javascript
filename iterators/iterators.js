/** Create variables with random numeric values */
let numObjects = Math.floor(Math.random()*5)
const maxObjects = Math.floor(Math.random()*15)+10

/**  */
const oddObject = {
  [Symbol.iterator]: ()=>{
    return {
      next: () => {
        /** Add a random number to numObjects */
        numObjects += Math.floor(Math.random()*3)+1
        /** Return numObjects to the iterator,
         * and if we are greater than the maxObjects,
         * stop the iterator
         */
        return {
          value: numObjects,
          done: (numObjects>maxObjects)
        }
      }
    }
  }
}

for(v of oddObject){
  console.log(v)
}

