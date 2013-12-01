'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Schema
var HouseSchema = new Schema({
  name: String,
  picture: String
});

mongoose.model('House', HouseSchema);
