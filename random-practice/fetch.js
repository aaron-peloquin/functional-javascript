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
    let value = json[key]

  /** Create <dt> and <dd> tags */
    let title = document.createElement('dt')
    let description = document.createElement('dd')

    /** Append <dt> and <dd> to <dl> */
    output_dl.appendChild(title);
    output_dl.appendChild(description);

    /** Fill <dt> with key, and <dd> with the value */
    title.innerText = key
    /** Special parsing for geo lat/long */
    if(key==='loc') {
      /** Set latitude to value so it goes into the first <dd> tag */
      console.log(value)
      let values = value.split(',')
      console.log(values)
      value = "lat: "+values[0]

      /** Inject a second <dd> for this <dt> */
      /** Create new <dd> for the longitude */
      let long_desc = document.createElement('dd')
      /** Append it to <dl> right after the lat's <dd> */
      output_dl.appendChild(long_desc);
      /** Set the longitude's <dd> text */
      long_desc.innerText = "long "+values[1]
    }
    /** Fill <dd> with it's value */
    description.innerText = value
  }
})

