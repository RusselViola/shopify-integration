const dotenv = require('dotenv').config();
const api_helper = require('./API_helper')
const express = require('express')
const app = express()
const port = 3000

const apiKey = process.env.SHOPIFY_API_KEY
const apiSecret = process.env.SHOPIFY_API_SECRET
const storeURL = process.env.SHOPIFY_STORE_URL

app.get('/', (req, res) => res.send('Welcome to Make REST API Calls In Express!'))

app.get('/getAPIResponse', (req, res) => {
    api_helper.make_API_call("https://" + apiKey + ":" + apiSecret + "@" + storeURL + "/admin/orders.json?created_at_min=2016-01-01T00:00:00-00:00&created_at_max=2016-12-31T00:23:59-23:59")
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))
