'use strict';

angular.module('magicSpellsApp')
  .controller('MagicSpellsCtrl', function ($scope, $location) {
    var attempts = 0,
        words = ['fight', 'magic'];

    $scope.round = 1;
    $scope.lockedListen = false;
    $scope.attemptColor = 'primary';
    $scope.currentWord = words[0];
    $scope.listenFirstWord = function(event){
      attempts += 1;
      if(attempts === 1) {
        $scope.attemptColor = 'danger';
        listen();
      } else if (attempts === 2){
        listen();
        $scope.lockedListen = true;
      }
      event.preventDefault();
    };

    var listen = function(){
        //
        // TODO: convert it to a Directive
        //

        var player = document.getElementById('magic-spell-audio');

        // stop previous audio
        var audioPath = player.src;
        player.src = '';
        player.src = audioPath;

        // play audio from the beginning
        player.play();
    };

    $scope.goToNextPage = function () {
      if($scope.round < 10){
        $scope.currentWord = words[$scope.round];
        $scope.round += 1;
        attempts = 0;
        $scope.lockedListen = false;
        $scope.attemptColor = 'primary';
      } else {
       $location.path("board");
      }
    };
  });
