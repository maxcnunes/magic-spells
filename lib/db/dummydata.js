'use strict';

var mongoose = require('mongoose'),
    fs = require('fs'),
    Verb = mongoose.model('Verb'),
    House = mongoose.model('House');


//Clear old Verbs, then add Verbs in
Verb.find({}).remove(function() {
  Verb.create(require('./seed/verbs.json'), function(err) {
    console.log('Populating Verbs - ' + (err || 'Finished'));
  });
});

//Clear old House, then add houses in
House.find({}).remove(function() {
  House.create(require('./seed/houses.json'), function(err) {
    console.log('Populating Houses - ' + (err || 'Finished'));
  });
});
