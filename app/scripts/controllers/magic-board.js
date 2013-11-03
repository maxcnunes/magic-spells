'use strict';

angular.module('magicSpellsApp')
.controller('MagicBoardCtrl', function ($scope) {
  var wrongWizards = 'Max, Rafael';

  var correctWizards = 'Mitchel, Maycon, Vanessa';

  var round = {
    spell: { infinitive: "Do, Does", simplePast: "Did", pastParticiple: "Done"  },
  wrongWizards: wrongWizards,
  correctWizards: correctWizards
  };

  var rounds = [];
  rounds.push(round);
  rounds.push(round);
  rounds.push(round);
  rounds.push(round);
  rounds.push(round);


  $scope.rounds = rounds;
});
