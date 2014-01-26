'use strict';

describe('Directive: zgTags', function () {

    // Use chaijs.com for expects
    var expect = chai.expect;

    var element;

    var urlBase="tag?q=";

    beforeEach(function () {
        module('zagalesDiyApp');

        module('templates');
    });



    beforeEach(inject(function ($rootScope, $compile) {
        var scope = $rootScope.$new();

        scope.data = {
            title: 'one title',
            image: 'http://dumy.com/image.png',
            username: 'my username',
            avatar: 'http://placekitten.com/40/40',
            tags: ['foo', 'bar']
        };

        element = angular.element('<zg-tags url-base=' + urlBase + ' tags="data.tags"></zg-tags>');
        element = $compile(element)(scope);
        scope.$digest();

    }));

    it('should have a link for each tag', inject(function () {
        var links = element.find('div.tag a');
        expect(links).to.have.length(2);
    }));

    it('should have a link with right url', inject(function () {
        var link = element.find('div.tag a').eq(0);
        var linkText=link.text().trim();
        expect(link.attr('href')).to.equal(urlBase+linkText);
    }));

    it('should have the first text with a space at the end', inject(function () {
        var link = element.find('div.tag a').eq(0);
        var linkText=link.text();
        var linkTextWithoutTrailingSpaces=link.text().trim();
        expect(linkText.length).to.equal(linkTextWithoutTrailingSpaces.length+1);
    }));

    it('should have the last text without a space at the end', inject(function () {
        var link = element.find('div.tag a').eq(1);
        var linkText=link.text();
        var linkTextWithoutTrailingSpaces=link.text().trim();
        expect(linkText.length).to.equal(linkTextWithoutTrailingSpaces.length);
    }));

});
