const campaign = function(d) {
  try{
    return d.map(r=>r.campaign)
  }
  catch(e){
    console.log("Error getting campaigns from ",d)
    console.error(e)
  }
}

module.exports = campaign