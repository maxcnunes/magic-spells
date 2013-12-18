'use strict';

angular.module('magicSpellsApp')
  .controller('CurrentWizardsCtrl', function ($scope, MagicService) {
    $scope.wizards = MagicService.getWizardsByHouse();

    $scope.toggleSelect = function(event, index) {
      MagicService.toggleWizardIsPresent(index);
      event.preventDefault();
    };
  });
