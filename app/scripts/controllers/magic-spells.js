'use strict';

angular.module('magicSpellsApp')
  .controller('MagicSpellsCtrl', function ($scope, $location) {
    var attempts = 0;
    $scope.round = 1;
    $scope.lockedListen = false;
    $scope.attemptColor = 'primary';
    $scope.listenFirstWord = function(event){
      if(attempts === 0) {
        $scope.attemptColor = 'danger';
        attempts += 1; 
      } else {
        $scope.lockedListen = true;
      }
      
      event.preventDefault();
    };
    
    $scope.goToNextPage = function () {
      if($scope.round < 10){
        $scope.round += 1;
        attempts = 0;
        $scope.lockedListen = false;
        $scope.attemptColor = 'primary';
      } else {
       $location.path("board"); 
      }
    };
  });
