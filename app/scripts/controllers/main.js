'use strict';

angular.module('magicVerbsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.students = [
    { name: 'Max', success: false },
    { name: 'Mitchel', success: false },
    { name: 'Maycon', success: false },
    { name: 'Vanessa', success: true },
    { name: 'Rafael', success: true }
    ];
  });
