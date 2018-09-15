const name = function(d) {
  try{
    return d.map(r=>r.name)
  }
  catch(e){
    console.error("Error getting campaigns from ",d,e)
  }
}

module.exports = name