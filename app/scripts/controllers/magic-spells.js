'use strict';

angular.module('magicSpellsApp')
  .controller('MagicSpellsCtrl', function ($scope, $location, VerbService) {
    var words = [];

    VerbService.getRoundsVerbs(function(verbs){
      words = verbs;
      $scope.round = 1;
      $scope.currentWord = words[0].infinitive;
      $scope.listenFirstWord = function(event){
        listen();
        event.preventDefault();
      };
    });


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
        $scope.currentWord = words[$scope.round].infinitive;
        $scope.round += 1;
      } else {
       $location.path("board");
      }
    };
  });
