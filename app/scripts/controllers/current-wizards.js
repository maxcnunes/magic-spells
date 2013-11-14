'use strict';

angular.module('magicSpellsApp')
  .controller('CurrentWizardsCtrl', function ($scope) {
    $scope.wizards = [
      { name: 'Max', present: true },
      { name: 'Mitchel', present: false },
      { name: 'Maycon', present: true },
      { name: 'Vanessa', present: true },
      { name: 'Rafael', present: false }
    ];

    $scope.toggleSelect = function(event, index) {
      $scope.wizards[index].present = !$scope.wizards[index].present;
      event.preventDefault();
    };
  });
