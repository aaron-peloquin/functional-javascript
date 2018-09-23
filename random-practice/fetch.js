
let ip_data = fetch("https://ipinfo.io/8.8.8.8/geo")

ip_data = ip_data.then((resp)=>resp.json())

ip_data = ip_data.then((json)=>json)

