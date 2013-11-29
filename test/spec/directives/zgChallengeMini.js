'use strict';

describe('Directive: zgChallengeMini', function () {

    // Use chaijs.com for expects
    var expect = chai.expect;

    var element;

    beforeEach(module('zagalesDiyApp'));

    beforeEach(inject(function ($rootScope, $compile) {
        $rootScope.data = {
            title: 'one title',
            image: 'http://dumy.com/image.png'
        }

        element = angular.element('<zg-challenge-mini ng-model="data"></zg-challenge-mini>');
        element = $compile(element)($rootScope);
        $rootScope.$digest();

    }));

    it('should have a title', inject(function () {
        var titles = element.find('h3');
        expect(titles).to.have.length(1);

        expect(titles.eq(0).text()).to.equal('one title');
    }));

    it('should have an image', inject(function () {
        var images = element.find('img');
        expect(images).to.have.length(1);

        var image = images.eq(0);
        expect(image.attr('ng-src')).to.equal('http://dumy.com/image.png');
    }));
});
