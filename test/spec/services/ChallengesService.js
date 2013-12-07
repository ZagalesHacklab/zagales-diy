'use strict';


describe('Service: ChallengesService', function () {

  // load the service's module
  beforeEach(module('zagalesDiyApp'));

  // instantiate service
  var ChallengesService;
  beforeEach(inject(function (_ChallengesService_) {
    ChallengesService = _ChallengesService_;
  }));

  it('should do something', function () {
    expect(!!ChallengesService).toBe(true);
  });

});