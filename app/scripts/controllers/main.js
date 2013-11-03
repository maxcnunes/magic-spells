'use strict';

angular.module('magicSpellsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.wizards = [
      { name: 'Max', success: false },
      { name: 'Mitchel', success: false },
      { name: 'Maycon', success: false },
      { name: 'Vanessa', success: true },
      { name: 'Rafael', success: true }
    ];
  });
