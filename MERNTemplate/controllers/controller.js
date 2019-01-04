const db = require("../models");

// Defining methods for the Article
module.exports = {

   //USER QUERIES

  findAllUser: function(req, res) {
  
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByIdUser: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUser: function(req, res) {
    console.log(req.body)
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateUser: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeUser: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //RECIPE QUERIES
  findAllRecipe: function(req, res) {
  
    db.Recipe
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByIdRecipe: function(req, res) {
    db.Recipe
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createRecipe: function(req, res) {
    console.log(req.body)
    db.Recipe
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateRecipeLikeCount: function(req, res) {
    db.Recipe.findById(req.params.id, function(err, recipe) {
      if (err) throw err;
      if (req.params.incrementOrDecrement === 'increment') {
        recipe.count += 1;
      } else if (req.params.incrementOrDecrement === 'decrement') {
        recipe.count -= 1;
      }
      recipe.save(err => {
        if (err) throw err;
        console.log('recipe decremented!')
      })
    })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  removeRecipe: function(req, res) {
    db.Recipe
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // sortTopRecipe: function(req, res){
  //   db.Recipe
  //     .findByCount(req.params.count)
  //     .sort()
  // }
 
};
