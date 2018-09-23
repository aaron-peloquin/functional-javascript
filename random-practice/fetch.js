
let response = fetch("https://ipinfo.io/8.8.8.8/geo")

json_data = response.then((resp)=>resp.json())

json_data.then((json)=>{
  console.log("The IP is:",json.ip)
})

