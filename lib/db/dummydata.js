'use strict';

var mongoose = require('mongoose'),
    Verb = mongoose.model('Verb'),
    fs = require('fs');


//Clear old Verbs, then add Verbs in
Verb.find({}).remove(function() {
  Verb.create(require('./seed/verb.json'), function(err) {
    console.log('Populating Verbs - ' + (err || 'Finished'));
  });
});
