
let response = fetch("https://ipinfo.io/8.8.8.8/geo")

json_data = response.then((resp)=>resp.json())

json_data.then((json)=>{
  let output_ul = document.querySelector('#output')
  console.log(output_ul)
  for(var key in json) {
    let li_element = document.createElement('li')
    console.log(li_element);
    output_ul.appendChild(li_element);
    li_element.innerText = key
  }
})

