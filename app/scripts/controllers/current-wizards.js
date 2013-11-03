'use strict';

angular.module('magicSpellsApp')
  .controller('CurrentWizardsCtrl', function ($scope) {
    $scope.wizards = [
      { name: 'Max' },
      { name: 'Mitchel' },
      { name: 'Maycon' },
      { name: 'Vanessa' },
      { name: 'Rafael' }
    ];
  });
