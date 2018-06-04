const mongoose = require('mongoose')

var fileSchema = mongoose.Schema({
    data: {type: Buffer },
    name: {type: String },
    mimetype: {type: String}
  });
  

  var fileModel = mongoose.model('file', fileSchema);
  module.exports = fileModel