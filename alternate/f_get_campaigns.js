const campaign = function(d) {
  try{
    return d.map(r=>r.campaign)
  }
  catch(e){
    console.error("Error getting campaigns from ",d,e)
  }
}

module.exports = campaign