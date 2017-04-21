// Require mongoose
var mongoose = require("mongoose");
// Create class
var Schema = mongoose.Schema;

// Create articles
var ArticleSchema = new Schema({
  
  title: {
    type: String,
    required: true
  },
 
  link: {
    type: String,
    required: true
  },
  // This only saves the id of teh Note model
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

var Article = mongoose.model("Article", ArticleSchema);

// Export
module.exports = Article;
