'use strict';

angular.module('magicSpellsApp')
  .controller('WizardHousesCtrl', function ($scope, $filter, HouseService) {
    HouseService.getAll().success(function (houses) {
      $scope.houses = houses;
      $scope.groupedHouses = $filter('group')($scope.houses, 4);
    });
  });
