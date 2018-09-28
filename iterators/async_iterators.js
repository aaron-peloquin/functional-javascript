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
  getHeight: async (id)=>8,//sleep(1).then(()=>dataObject.heights[id]),
  getAge: (id)=>dataObject.ages[id]
}

/** Create an async iterator object */
const asyncObject = {
  [Symbol.iterator]: function() {
    let i = -1;
    return {
      next:  function() {
        i++
        console.log("inside i", i)
        /** Get this user's name, height, and age */
        let user = {
          nam: getData.getName(i)
        }
        console.log("inside user a", user)
        user.hei =  getData.getHeight(i)
        user.age =  getData.getAge(i)
        console.log("inside user b", user)
        if(i>2) {
          console.log("Should be exiting the loop, why is it not exiting?..")
          return { done: true }
        }

        let my_return = { value: user, done: false }
        console.log("about to return..", my_return)
        return my_return
      }
    }
  }
}

/** Using `for await` loops forever */
// ;(async function() {
//   for await (const new_user of asyncObject) {
//     console.log("usr", new_user)
//   }
// })()

/** Calling `await` next() manually */
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
