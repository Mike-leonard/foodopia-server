const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

const chefData = require('./data/chefData.json')
const recipeList = require('./data/recipeData.json')

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

app.get('/recipe/:id', (req, res) => {
    const id =  parseInt(req.params.id)
    const singleChefRecipes = recipeList.filter(recipes => parseInt(recipes.chefId) === id);
    res.send(singleChefRecipes)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})