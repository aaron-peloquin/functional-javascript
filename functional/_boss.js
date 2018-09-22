const statPrototype = new require('./_stats.js') 

/** Setup boss object */
let boss = {name: "Vyth", job: "Boss"}

/** boss object has the ability to generate stats */
Object.setPrototypeOf(boss,statPrototype)

module.exports = boss