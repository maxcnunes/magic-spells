'use strict';

angular.module('magicSpellsApp')
.controller('MagicBoardCtrl', function ($scope) {
  var fakeRound = function() {
    return {
      spell: { infinitive: "Do, Does", simplePast: "Did", pastParticiple: "Done"  },
      results: [
        { wizard: 'Max', correct: false, picture: '/images/users/max.jpg' },
        { wizard: 'Rafael', correct: true, picture: '/images/users/rafael.jpg' },
        { wizard: 'Mitchel', correct: true, picture: '/images/users/mitchel.jpg' },
        { wizard: 'Maycon', correct: true, picture: '/images/users/maycon.jpg' },
        { wizard: 'Vanessa', correct: true, picture: '/images/users/vanessa.jpg' }
      ]
    };
  }

  var rounds = [];
  rounds.push(fakeRound());
  rounds.push(fakeRound());
  rounds.push(fakeRound());
  rounds.push(fakeRound());
  rounds.push(fakeRound());


  $scope.rounds = rounds;
  
  $scope.toggleCorrect = function(item){
    item.correct = !item.correct;
  };
  
  $scope.calculateWizardTotal = function(item){
    var total = 0;
    $scope.rounds.forEach( function(round) {
      round.results.forEach( function(result) {
        if(result.wizard === item.wizard && result.correct) {
          total += 1;          
        }
      });
    });
    return total;
  };
  
  $scope.calculateTotal = function(){
    var total = 0;
    $scope.rounds.forEach( function(round) {
      round.results.forEach( function(result) {
        if(result.correct) {
          total += 1;          
        }
      });
    });
    return total;
  };
});
