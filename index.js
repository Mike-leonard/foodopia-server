const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

const chefData = require('./data/chefData.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to Foodopia!')
})
app.get('/chef', (req, res) => {
    res.send(chefData)
})

app.get('/chef/:id', (req, res) => {
    const id =  parseInt(req.params.id)
    const singleChef = chefData.find(chef => chef.id === id);
    res.send(singleChef)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})