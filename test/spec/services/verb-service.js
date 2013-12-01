'use strict';

describe('Service: VerbService', function () {

  // load the service's module
  beforeEach(module('MagicverbsApp'));

  // instantiate service
  var VerbService;
  beforeEach(inject(function (_VerbService_) {
    VerbService = _VerbService_;
  }));

  it('should do something', function () {
    expect(!!VerbService).toBe(true);
  });

});
