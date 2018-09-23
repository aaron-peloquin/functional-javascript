/** GET geolocation data for one of Google's DNS servers */
let response = fetch("https://ipinfo.io/8.8.8.8/geo")

/** Convert response into JSON data */
json_data = response.then((resp)=>resp.json())

/** Update DOM with JSON data */
json_data.then((json)=>{
  /** Find the output <dl> */
  let output_dl = document.querySelector('#output')

  /** Loop through all JSON we recieved, and print to the page */
  for(var key in json) {
    /** Create <dt> and <dd> tags */
    let title = document.createElement('dt')
    let description = document.createElement('dd')

    /** Append <dt> and <dd> to <dl> */
    output_dl.appendChild(title);
    output_dl.appendChild(description);

    /** Fill <dt> with key, and <dd> with the value */
    title.innerText = key
    description.innerText = json[key]
  }
})

