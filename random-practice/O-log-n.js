/**
 * Not 100% sure if this is the best way to do this,
 * but I came up with the solution on my own.
 */

let data = new Array()

/** Fill the array with every lowercase letter */
for(let i=10; i<36; i++){
  data.push({letter:i.toString(36),index:i-10})
}

let found_seek_letter = false
let find_letter = "z"

/** Function to seek out a [{letter.letter}] from data */
let seek_letter = (data,letter)=>{
  while(true) {
    let data_length = data.length
    /** On each iteration, log out the array's length */
    console.log(data.length)
    /** Once we get down to 5 or fewer results, loop through them */
    if(data_length<=5) {
      for(str of data) {
        if(str.letter==letter) {
          return str
        }
      }
      return false;
    }

    /** Get the index of where we will check */
    let check_index = Math.floor((data_length-1)/2)
    /** Get the {}.letter at that index */
    let check_letter = data[check_index].letter

    /** If this happens to be the letter we are seeking, return it */
    if(check_letter===letter) {
      return data[check_index]
    }

    if(check_letter<letter) {
      /** If this letter is smaller than what we're looking for, continue while loop with only the 2nd half of data */
      data = data.slice(check_index)
    }
    else {
      /** continue while loop with only the 1st half of data */
      data = data.slice(0,check_index)
    }
  }
}

/** Log the result to console */
let result = seek_letter(data, find_letter);
console.log(result);
