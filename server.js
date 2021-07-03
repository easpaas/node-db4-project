const express = require('express');
const helmet = require('helmet');

const db = require('./data/dbConfig.js');

const server = express();

server.use(helmet());
server.use(express.json());

// server.use('/', (req, res) => {
//   res.status(200).json({ api: "up" })
// });

server.get('/api/recipes', (req, res) => {
  db("recipes")
    .then(recipes => {
      res.status(201).json({ data: recipes })
    })
    .catch(error => {
      res.status(500).json({ errorMessage: error.message })
    });
});

server.post('/api/recipes', (req, res) => {
  const recipe = req.body;
  if (!recipe.recipe_name){
    res.status(400).json({ message: 'Please provide recipe name.' })
  } else {
    db("recipes")
    .insert(recipe)
    .then(something => {
      res.status(201).json({ data: something })
    })
    .catch(error => {
      res.status(500).json({ errorMessage: error.message })
    });
  }
})

module.exports = server;