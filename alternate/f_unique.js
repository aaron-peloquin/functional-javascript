const unique = function(char_data) {
  try{
    return char_data.filter((value,index,self)=>{return self.indexOf(value)===index})
  }
  catch(e){
    console.log("Error getting unique values from ",char_data)
    console.error(e)
  }
}

module.exports = unique