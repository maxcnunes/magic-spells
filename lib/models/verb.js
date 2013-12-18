'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Schema
var VerbSchema = new Schema({
  level: Number,
  infinitive: String,
  simplePast: String,
  pastParticiple: String
});

mongoose.model('Verb', VerbSchema);
