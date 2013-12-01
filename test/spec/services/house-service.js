'use strict';

describe('Service: HouseService', function () {

  // load the service's module
  beforeEach(module('MagicverbsApp'));

  // instantiate service
  var HouseService;
  beforeEach(inject(function (_HouseService_) {
    HouseService = _HouseService_;
  }));

  it('should do something', function () {
    expect(!!HouseService).toBe(true);
  });

});
