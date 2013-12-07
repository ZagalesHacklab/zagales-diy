'use strict';

describe('Controller: MainCtrl', function () {

	var expect = chai.expect;

	// load the controller's module
	beforeEach(module('zagalesDiyApp'));

	var MainCtrl,
		scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		MainCtrl = $controller('MainCtrl', {
			$scope: scope
		});
	}));

	it('should attach a list of challenges to the scope', function () {
		expect(scope.challenges).to.have.length(0);
	});

	it('should have a button to load data', function () {
		expect(scope).to.respondTo('loadData');
	});
});
