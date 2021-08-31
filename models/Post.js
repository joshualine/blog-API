const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  title: String,
  description: String,
  category: String
  
});


module.exports = mongoose.model('Posts', PostSchema);