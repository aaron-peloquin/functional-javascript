

let a = 1
let b = 0

// OR
if((a | b)) {
  console.log("at least one of the variable is 1")
}

// Not OR
if(!(a | b)) {
  console.log("both variable are 0")
}

// AND
if((a & b)) {
  console.log("both variables are 1")
}

// Not AND
if(!(a & b)) {
  console.log("at least oen variable is 0")
}

// XOR
if((a ^ b)){
  console.log("varaiables do not match eachother")
}
