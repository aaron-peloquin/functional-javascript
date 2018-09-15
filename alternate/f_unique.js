const unique = function(d) {
  try{
    return d.filter((v,i,s)=>{return s.indexOf(v)===i})
  }
  catch(e){
    console.log("Error getting unique values from ",d)
    console.error(e)
  }
}

module.exports = unique