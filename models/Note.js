// Require mongoose
var mongoose = require("mongoose");
// Create class
var Schema = mongoose.Schema;

// Create a schema
var NoteSchema = new Schema({
 
  title: {
    type: String
  },
  
  body: {
    type: String
  }
});

// Creating the Note model
var Note = mongoose.model("Note", NoteSchema);

// Export
module.exports = Note;
