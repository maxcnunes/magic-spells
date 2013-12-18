'use strict';

angular.module('magicSpellsApp')
.controller('MagicBoardCtrl', function ($scope, VerbService, MagicService) {
  var words;
  VerbService.getRoundsVerbs(function(verbs) { words = verbs; });

  var auxFakeRound = -1;
  var fakeRound = function() {
    auxFakeRound += 1;
    var results = [];
    MagicService.getPresentWizards().forEach(function (wizard) {
      wizard.correct = true;
      results.push(wizard);
    });
    return {
      spell: words[auxFakeRound],
      results: results
    };
  }

  var rounds = [];
  rounds.push(fakeRound());
  rounds.push(fakeRound());
  rounds.push(fakeRound());
  rounds.push(fakeRound());
  rounds.push(fakeRound());
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
