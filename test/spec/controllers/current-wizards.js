'use strict';

describe('Controller: CurrentWizardsCtrl', function () {

  // load the controller's module
  beforeEach(module('magicSpellsApp'));

  var CurrentWizardsCtrl,
    scope,
    mockClickEvnt = { preventDefault : function(){} };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CurrentWizardsCtrl = $controller('CurrentWizardsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of wizards to the scope', function () {
    expect(scope.wizards.length).toBe(5);
  });

  it('should toogle selected scope', function () {
    scope.wizards[0].present = true;
    scope.toggleSelect(mockClickEvnt, 0);
    expect(scope.wizards[0].present).toBe(false);
  });
});
