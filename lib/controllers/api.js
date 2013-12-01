'use strict';

var mongoose = require('mongoose'),
    Verb = mongoose.model('Verb'),
    async = require('async'),
    _ = require('underscore');

exports.verbs = function(req, res) {
  return Verb.rounds(function (err, verbs) {
    if (!err) {
      return res.json(verbs);
    } else {
      return res.status(500).send(err);
    }
  });
};
