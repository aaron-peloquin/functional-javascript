const unique = function(d) {
  try{
    return d.filter((v,i,s)=>{return s.indexOf(v)===i})
  }
  catch(e){
    console.error("Error getting campaigns from ",d,e)
  }
}

module.exports = unique