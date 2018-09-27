/**
 * Writing a lot closer to the example I am using to learn
 * https://www.youtube.com/watch?v=I5oDbp_U-fQ&index=3&list=PL0zVEGEvSaeG2T5n8FuPGb11JHea7idb9
 * 
 * Still not working. Same infinite loop issue. It is a problem in chrome/my setup. Moving on.
 */


/** Allows you to sleep the code for testing */
function delay(ms) {
  return new Promise(resolve=>setTimeout(resolve, ms))
}

/** Creates a fake database */
function create_store() {
  const tables = {
    customer: {
      1: {name:"Aaron"},
      2: {name:"John"},
      3: {name:"Mark"},
      4: {name:"Steve"}
    },
    data: {
      1: ["Pretzel", "Nature"],
      2: ["Hotdog"],
      3: ["Subaru", "Some data"],
      4: ["Magnolia"]
    }
  }
    return {
      get: (table,id) => delay(500).then(() => {tables[table][id]})
    }
}

const store = create_store()

const people = {
  [Symbol.iterator]: function(){
    let i = 0
    return {
      next: async function() {
        i++
        const customer = await store.get('customer',i)
        if(!customer) {
          return {done:true}
        }
        customer.data = await store.get('data',i)
        return {
          value: customer,
          done: false
        }
      }
    }
  }
}

;(async function() {
  for await (person of people) {
    console.log(person)
  }
})()
