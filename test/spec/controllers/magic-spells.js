'use strict';

describe('Controller: MagicSpellsCtrl', function () {

  // load the controller's module
  beforeEach(module('magicSpellsApp'));

  var MagicSpellsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MagicSpellsCtrl = $controller('MagicSpellsCtrl', {
      $scope: scope
    });
  }));
});
