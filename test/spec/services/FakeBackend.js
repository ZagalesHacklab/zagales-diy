'use strict';

describe('Service: FakeBackend', function () {

  // load the service's module
  beforeEach(module('zagalesDiyApp'));

  // instantiate service
  var FakeBackend;
  beforeEach(inject(function (_FakeBackend_) {
    FakeBackend = _FakeBackend_;
  }));

  it('should do something', function () {
    expect(!!FakeBackend).toBe(true);
  });

});
