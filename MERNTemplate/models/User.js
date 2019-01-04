var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const UserSchema = new Schema({
  // `title` is required and of type String
  username: {
    type: String,
    required: true, 
    unique: true,
  },
  // `link` is required and of type String
  password: {
    type: String,
    required: true
  },

  image: { 
    type: String, 
    
    required: true
  },

   about: {
     type: String,
     required: true
  }


});

const User = mongoose.model("User", UserSchema);


// Export the Article model
module.exports = User;
