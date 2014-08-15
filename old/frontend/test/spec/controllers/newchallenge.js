'use strict';

describe('Controller: NewChallengeCtrl', function () {

  // load the controller's module
  beforeEach(module('zagalesDiyApp'));

  var NewChallengeCtrl,
    scope;

  var expect = chai.expect;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewChallengeCtrl = $controller('NewChallengeCtrl', {
      $scope: scope
    });
  }));

  it('should have a scope container for the new challenge', function () {
    expect(scope.challenge).to.have.property('title');
    expect(scope.challenge).to.have.property('description');
    expect(scope.challenge).to.have.property('tags');
    expect(scope.challenge).to.have.property('rating');
    expect(scope.challenge).to.have.property('images');
  });

  it('should have a method to save the info', function() {
    expect(scope).to.respondTo('saveChallenge');
  });
});
