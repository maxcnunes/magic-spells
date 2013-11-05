'use strict';

angular.module('magicSpellsApp')
  .controller('WizardHousesCtrl', function ($scope) {
    $scope.houses = [
      { name: 'Gryffindor', picture: 'gryffindor.png' },
      { name: 'Hufflepuff', picture: 'hufflepuff.png' },
      { name: 'Ravenclaw', picture: 'ravenclaw.png' },
      { name: 'Slytherin', picture: 'slytherin.png' },
    ];
  });
