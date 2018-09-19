const campaign = function(char_data) {
  try{
    return char_data.map(r=>r.campaign)
  }
  catch(e){
    console.log("Error getting campaigns from ",char_data)
    console.error(e)
  }
}

module.exports = campaign