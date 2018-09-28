const fetch = require('node-fetch');
const config = require('./github-config')

let graphql_query = {"query": "{viewer{login}}"}

let fetch_options = {
  method: 'POST',
  headers: {
    'Authorization': 'bearer ' + config.key,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(graphql_query),
}
let data_promise = fetch('https://api.github.com/graphql', fetch_options)

data_promise.then(res => res.json())
.then((res) => {
  console.log("Hello, your name is: ",res.data.viewer.login)
});
