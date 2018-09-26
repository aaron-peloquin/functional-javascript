let data = new require('./d_data.js')

const get_campaigns = new require('./f_get_campaigns.js')
const get_names = new require('./f_get_names.js')
const unique = new require('./f_unique.js')

/** Checking data filtering */
let campaigns = get_campaigns(data)
console.log(campaigns)
console.log(get_names(data))

/** Checking error handling */
console.log(get_names("Hello world"))
console.log(get_campaigns("Hello world"))

/** Test error handling */
let unique_campaigns = unique(campaigns)
console.log(unique_campaigns)

