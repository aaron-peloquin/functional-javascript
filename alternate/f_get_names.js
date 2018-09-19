const name = function(char_data) {
  try{
    return char_data.map(r=>r.name)
  }
  catch(e){
    console.log("Error getting names from ",char_data)
    console.error(e)
  }
}

module.exports = name