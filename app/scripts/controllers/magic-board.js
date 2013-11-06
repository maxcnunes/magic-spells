'use strict';

angular.module('magicSpellsApp')
.controller('MagicBoardCtrl', function ($scope) {

  var round = {
    spell: { infinitive: "Do, Does", simplePast: "Did", pastParticiple: "Done"  },
    results: [
      { wizard: 'Max', correct: false, picture: '/images/users/max.jpg' },
      { wizard: 'Rafael', correct: true, picture: '/images/users/vanessa.jpg' },
      { wizard: 'Mitchel', correct: true, picture: '/images/users/mitchel.jpg' },
      { wizard: 'Maycon', correct: true, picture: '/images/users/maycon.jpg' },
      { wizard: 'Vanessa', correct: true, picture: '/images/users/rafael.jpg' }
    ]
  };

  var rounds = [];
  rounds.push(round);
  rounds.push(round);
  rounds.push(round);
  rounds.push(round);
  rounds.push(round);


  $scope.rounds = rounds;
});
