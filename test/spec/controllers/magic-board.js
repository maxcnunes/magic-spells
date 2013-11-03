'use strict';

describe('Controller: MagicBoardCtrl', function () {

  // load the controller's module
  beforeEach(module('magicSpellsApp'));

  var MagicBoardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MagicBoardCtrl = $controller('MagicBoardCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of rounds result to the scope', function () {
    expect(scope.rounds.length).toBe(5);
  });
});
