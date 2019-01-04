var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const RecipeSchema = new Schema({
  // `title` is required and of type String
  recipeName: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  image: {
    type: String,
    required: true
  },

  description: { 
    type: String, 
    
   required: true
   },

   ingredients: {
     type: String,
     required: true,
   },
   primaryMeat:{
     type:String,
     enum: ['Pork', 'Beef', 'Fish', 'Chicken', 'Turkey', 'Other', 'Lamb'],
     required: true,
   },
   count:{
    type: Number,
    default: 0,
    required: true
   },
   //this may not need to be a string 
   user:{
     type: String,
     required: true,
   }

});

const Recipe = mongoose.model("Recipe", RecipeSchema);


// Export the Article model
module.exports = Recipe;
