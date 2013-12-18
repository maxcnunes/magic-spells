'use strict';

angular.module('magicSpellsApp')
  .controller('WizardHousesCtrl', function ($scope, $filter, HouseService, $location, $timeout) {
    $scope.playingSound = false;
    HouseService.getAll().success(function (houses) {
      $scope.houses = houses;
      $scope.groupedHouses = $filter('group')($scope.houses, 4);
    });

    $scope.selectHouse = function (event, house) {
      $scope.playingSound = true;
      listen(house.sound);
      
      moveToNextPageAfterPlaySound();
    };

    var listen = function(audioPath){
        //
        // TODO: convert it to a Directive
        //

        var player = document.getElementById('magic-team-audio');
        player.src = audioPath;
        player.volume = 0.2;
        player.play();
    };

    var moveToNextPageAfterPlaySound = function () {
      $timeout(function () {
        $location.path("/current");
      }, 3000);
    };
  });
