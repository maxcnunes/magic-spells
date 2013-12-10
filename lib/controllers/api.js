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

exports.generalResult = function(req, res) {
  // sample
  return House.find(function (err, houses) {
    var totalRounds = 10;
    var result = [];

    houses.forEach(function(house){
      var item = {
        name: house.name,
        marker: { symbol: 'url(' + house.pictureSmall+ ')' },
        data: []
      };

      for (var i = 0; i < totalRounds; i++) {
        item.data.push({
          y: getRandomInt(0, 100),
          marker: { symbol: (i === totalRounds- 1) ? 'url(' + house.pictureSmall + ')' : 'circle' }
        });
      };
      result.push(item);
    });
    return res.json(result);
  });
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
