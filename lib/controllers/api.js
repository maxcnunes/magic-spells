'use strict';

var mongoose = require('mongoose'),
    Verb = mongoose.model('Verb'),
    House = mongoose.model('House'),
    async = require('async'),
    _ = require('underscore');

var BOOK_LEVEL = { RED: 'RED', BLUE: 'BLUE' },
    VERB_LEVEL = { EASY: 1, MEDIUM: 2, HARD: 3};

exports.verbs = function(req, res) {
  console.log('BOOK: ' + req.query.book);

  return Verb.find(function (err, allVerbs) {
    var verbs = [],
        easyVerbs = _.filter(allVerbs, function (verb) { verb.level === VERB_LEVEL.EASY; }),
        mediumVerbs = _.filter(allVerbs, function (verb) { verb.level === VERB_LEVEL.MEDIUM; }),
        hardVerbs = _.filter(allVerbs, function (verb) { verb.level === VERB_LEVEL.HARD; });

    verbs.concat(getRandomVerbByLevelAndBook(VERB_LEVEL.EASY, req.query.book, easyVerbs));   
    verbs.concat(getRandomVerbByLevelAndBook(VERB_LEVEL.MEDIUM, req.query.book, mediumVerbs));   
    verbs.concat(getRandomVerbByLevelAndBook(VERB_LEVEL.HARD, req.query.book, hardVerbs));   

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
          y: (i === 0 ? 0 : item.data[i-1].y) + getRandomInt(0, 10),
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

function getRandomVerbByLevelAndBook(level, book, verbs) {
  var filteredVerbs = [],
      amount = getAmountVerbsByLevelAndBook(level, book);

    do {
       filteredVerbs.push(getRandomVerb(verbs, filteredVerbs));
    } while (filteredVerbs.length < amount);
  
  return this[num];
};

function getRandomVerb (verbs, filteredVerbs) {
  var rand = verbs[Math.floor(Math.random() * verbs.length)];

  while (_.filter(filteredVerbs, function (verb) { verb._id === rand._id; })) {
    rand = getRandomVerb (verbs, filteredVerbs);
  }

  return rand;
};

function getAmountVerbsByLevelAndBook(level, book) {
  if (book === BOOK_LEVEL.RED) {
    if (level === VERB_LEVEL.EASY) return 4;
    if (level === VERB_LEVEL.MEDIUM) return 4;
    if (level === VERB_LEVEL.HARD) return 2;
  }
  else if (book === BOOK_LEVEL.BLUE) {
    if (level === VERB_LEVEL.EASY) return 2;
    if (level === VERB_LEVEL.MEDIUM) return 4;
    if (level === VERB_LEVEL.HARD) return 4;
  }

  return 0;
};