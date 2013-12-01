'use strict';

var mongoose = require('mongoose'),
    Verb = mongoose.model('Verb'),
    House = mongoose.model('House'),
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

exports.houses = function(req, res) {
  return House.find(function (err, houses) {
    if (!err) {
      return res.json(houses);
    } else {
      return res.status(500).send(err);
    }
  });
};
