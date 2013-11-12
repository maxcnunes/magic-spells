'use strict';

angular.module('magicSpellsApp')
  .controller('WizardHousesCtrl', function ($scope, $filter) {
    $scope.houses = [
      { name: 'Eagles', picture: 'eagles.png' },
      { name: 'Foxewe', picture: 'foxewe.png' },
      { name: 'Horseal', picture: 'horseal.png' },
      { name: 'Lioncow', picture: 'lioncow.png' },
      { name: 'Monkeys in T-shirts', picture: 'monkeys_in_t-shirts.png' },
      { name: 'Rubble Fish', picture: 'rubble_fish.png' },
      { name: 'Russian Owls', picture: 'russian_owls.png' },
      { name: 'Turkeywolf', picture: 'turkeywolf.png' }
    ];

    $scope.groupedHouses = $filter('group')($scope.houses, 4);
  });
