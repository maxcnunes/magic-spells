'use strict';

describe('Controller: WizardHousesCtrl', function () {

  // load the controller's module
  beforeEach(module('magicSpellsApp'));

  var WizardHousesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WizardHousesCtrl = $controller('WizardHousesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of wizard houses to the scope', function () {
    expect(scope.houses.length).toBe(9);
  });
});
