'use strict';


describe('Service: Challenges', function () {
  // load the service's module
  beforeEach(module('zagalesDiyApp'));

  // instantiate service
  var Challenges;
  beforeEach(inject(function (_Challenges_) {
    Challenges = _Challenges_;
  }));

  it('should respond to query method', function() {
    expect(Challenges.query).toBeDefined();
  })

});