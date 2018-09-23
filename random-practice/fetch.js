
let response = fetch("https://ipinfo.io/8.8.8.8/geo")

json_data = response.then((resp)=>resp.json())

json_data.then((json)=>{
  let output_ul = document.querySelector('#output')
  console.log(output_ul)
  for(var key in json) {
    let title = document.createElement('dt')
    let description = document.createElement('dd')
    output_ul.appendChild(title);
    output_ul.appendChild(description);
    title.innerText = key
    description.innerText = json[key]
  }
})

