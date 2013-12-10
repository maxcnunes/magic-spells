'use strict';

describe('Service: MagicService', function () {

  // load the service's module
  beforeEach(module('MagicverbsApp'));

  // instantiate service
  var MagicService;
  beforeEach(inject(function (_MagicService_) {
    MagicService = _MagicService_;
  }));

  it('should do something', function () {
    expect(!!MagicService).toBe(true);
  });

});
