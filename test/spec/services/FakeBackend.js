describe('Service: FakeBackend', function () {

  // load the service's module
  beforeEach(module('zagalesDiyApp'));

  // instantiate service
  var FakeBackend;
  var backend, http, scope;

  beforeEach(inject(function (_FakeBackend_, $injector, $rootScope) {
    // Set up the mock http service responses
    backend = $injector.get('$httpBackend');

    scope = $rootScope.$new();

    http = $injector.get('$http');

    FakeBackend = _FakeBackend_;
    FakeBackend.init();
  }));

//  afterEach(function () {
//		$httpBackend.verifyNoOutstandingExpectation();
//		$httpBackend.verifyNoOutstandingRequest();
//  });

//	it('should not redir images', function () {
//		var url = "image.png";
//
//		$httpBackend.expectGET(url);
//		$http.get(url);
//	});

  it('should not redir test folder', function () {
    //
    // TODO: this test doesn't work with ngMock.$httpBackend
    // see mockService() method in FakeBacked
    //

//    backend.expectGET('../test/mocks/challenges.json');
//    scope.$apply(function () {
//      http.get('../api/challenges/recent');
//    });
//    backend.flush();
  });

});
