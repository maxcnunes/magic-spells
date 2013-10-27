'use strict';

angular.module('magicVerbsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.students = [
    { name: 'Vanessa', success: true },
    { name: 'Max', success: false },
    { name: 'Rafael', success: true }
    ];
  });
