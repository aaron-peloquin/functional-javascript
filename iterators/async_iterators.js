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
    let i = -1;
    return {
      next: async function() {
        i++
        /** Get this user's name, height, and age */
        let user = {}
        user.name = await getData.getName(i)
        user.height = await getData.getHeight(i)
        user.age = await getData.getAge(i)
        
        if(i>2) {
          console.log("Should be exiting the loop, why is it not exiting?..")
          return { done: true }
        }
        /** Return numObjects as the value, and return done boolean if > max */
        let my_return = { value: user, done: (typeof user=='undefined') }
        console.log("about to return..", my_return)
        return my_return
      }
    }
  }
}

;(async function() {
  for await (const new_user of asyncObject) {
    console.log("usr", new_user)
  }
})()

// async function run() {
//   // for await (const user of asyncObject) {
//   //   console.log("User: ", user)
//   // }

//   const iter = asyncObject[Symbol.iterator]();

//   const user = (await iter.next())  
//   const user1 = (await iter.next())
//   const user2 = (await iter.next())
//   const user3 = (await iter.next())
//   const user4 = (await iter.next())

//   console.log(user)
//   console.log(user1)
//   console.log(user2)
//   console.log(user3)
//   console.log(user4)

//   // return [user,user2]
// }

// let userData = run().then((two_users)=>{
//   console.log("two users: ",two_users)
// })
