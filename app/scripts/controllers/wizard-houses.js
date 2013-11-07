'use strict';

angular.module('magicSpellsApp')
  .controller('WizardHousesCtrl', function ($scope, $filter) {
    $scope.houses = [
      { name: 'Eagles', picture: 'eagles.jpg' },
      { name: 'Foxewe', picture: 'foxewe.jpg' },
      { name: 'Horseal', picture: 'horseal.jpg' },
      { name: 'Lioncow', picture: 'lioncow.jpg' },
      { name: 'Monkeys in T-shirts', picture: 'monkeys_in_t-shirts.jpg' },
      { name: 'Rubble Fish', picture: 'rubble_fish.jpg' },
      { name: 'Russian Owls', picture: 'russian_owls.jpg' },
      { name: 'Turkeywolf', picture: 'turkeywolf.jpg' }
    ];

    $scope.groupedHouses = $filter('group')($scope.houses, 4);
  });
