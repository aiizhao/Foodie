const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
  creator_name: String,
  creator_id: String,
  content: String,
  title: String,
  rating: String,
  image: String,
  likes: [String],
});

// compile model from schema
module.exports = mongoose.model("story", StorySchema);
