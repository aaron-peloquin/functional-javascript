let a = 1
let b = 1
// OR
if((a | b)) {
  console.log("at least one of the variable is 1")
}

a = 0
b = 0
// Not OR
if(!(a | b)) {
  console.log("both variable are 0")
}

a = 1
b = 1
// AND
if((a & b)) {
  console.log("both variables are 1")
}

a = 0
b = 1
// Not AND
if(!(a & b)) {
  console.log("at least oen variable is 0")
}

a = 1
b = 0
// XOR
if((a ^ b)){
  console.log("varaiables do not match eachother")
}

a = 1
b = 1
// Not XOR
if(!(a ^ b)){
  console.log("varaiables match eachother")
}
