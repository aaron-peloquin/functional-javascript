/** Create some fake data */
const dataObject = {
  names: ["Aaron","Erin","Aron"],
  heights: [5,6,4],
  ages: [32,35,25]
}

/** Create object for retrieving data, getHeight has a delay() in it */
const getData = {
  getName: (id)=>dataObject.names[id],
  getHeight: (id)=> delay(750).then(() => dataObject.names[id]),
  getAge: (id)=>dataObject.ages[id]
}

/** Test getData */
console.log(getData.getAge(1))



