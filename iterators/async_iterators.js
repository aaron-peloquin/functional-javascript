/** Create a sleep function (grabbed off stackoverflow), https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep */
const sleep = function (time) {return  new Promise((resolve) => setTimeout(resolve, time))}

/** Create some fake data */
const dataObject = {
  names: ["Aaron","Erin","Aron"],
  heights: [5,6,4],
  ages: [32,35,25]
}

/** Create object for retrieving data, getHeight has a delay() in it */
const getData = {
  getName: (id)=>dataObject.names[id],
  getHeight: (id)=>sleep(500).then(()=>dataObject.heights[id]),
  getAge: (id)=>dataObject.ages[id]
}


/** Create an async iterator object */
const asyncObject = {
  [Symbol.iterator]: function() {
    let i = 0
    return {
      next: async function() {
        let start = Date.now()
        /** Get this user's name, height, and age */
        let user = {}
        user.name = await getData.getName(i)
        if(!user.name || i>10) {
          return { done: true }
        }
        console.log(user,(Date.now() - start))
        user.height = await getData.getHeight(i)
        console.log(user,(Date.now() - start))
        user.age = await getData.getAge(i)
        console.log(user,(Date.now() - start))
        /** Return numObjects as the value, and return done boolean if > max */
        const ret = { value: user, done: false }
        i++

        console.log(ret)
        return ret
      }
    }
  }
}

;(async function() {
  const iter = asyncObject[Symbol.iterator]();

  const user = (await iter.next()).value  
  const user1 = (await iter.next()).value
  const user2 = (await iter.next()).value

  console.log(user)
  console.log(user1)
  console.log(user2)
})();
