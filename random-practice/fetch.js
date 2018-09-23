
let response = fetch("https://ipinfo.io/8.8.8.8/geo")

json_data = response.then((resp)=>resp.json())

json_data.then((json)=>{
  console.log("The IP is:",json.ip)
  console.log("It's city is:",json.city)
  console.log("It's country is:",json.country)
  console.log("It's postal code is:",json.postal)
})

