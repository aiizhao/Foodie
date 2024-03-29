const mongoose = require("mongoose");

//define a comment schema for the database
const CommentSchema = new mongoose.Schema({
  creator_name: String,
  creator_id: String,
  parent: String, // links to the _id of a parent story 
  content: String,
});

// compile model from schema
module.exports = mongoose.model("comment", CommentSchema);
