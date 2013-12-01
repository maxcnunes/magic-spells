'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var random = function () { return [Math.random(), Math.random()]; };

// Schema
var VerbSchema = new Schema({
  level: Number,
  infinitive: String,
  simplePast: String,
  pastParticiple: String,
  _r: { type: [Number], default: random, index: '2d' }
});


VerbSchema.statics.rounds = function (callback) {
  return this.model('Verb')
              .where('_r')
              .near(random())
              .limit(10)
              .exec(callback);
};

mongoose.model('Verb', VerbSchema);
