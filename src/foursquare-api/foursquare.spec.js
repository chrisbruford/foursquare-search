import { Foursquare } from './foursquare.api';
import { dummyTrendingResponse, dummyRecommendedResponse, dummyRecommended, dummyTrending } from './dummy-data';
require('jasmine-ajax');

describe('Foursquare API', function () {

    let dummy404 = {
        status: 404,
        statusText: "Page not found"
    }

    let foursquare = new Foursquare();

    beforeAll(function () {

    });

    beforeEach(function () {
        jasmine.Ajax.install();
    });

    afterEach(function () {
        jasmine.Ajax.uninstall();
    })

    it('exists', function () {
        expect(foursquare).not.toBe(undefined);
    });

    it('retrieves retrieves trending venues from foursquare', function (done) {
        foursquare.getTrendingVenues({near: "London"})
            .then(trendingVenues => {
                expect(trendingVenues).toEqual(dummyTrending);
                done();
            })
            .catch(err => {
                fail(err);
                done();
            });

        let request = jasmine.Ajax.requests.mostRecent();
        expect(request.url).toBe('https://api.foursquare.com/v2/venues/trending?near=London');
        expect(request.method).toBe('GET');
        request.respondWith(dummyTrendingResponse);
    });

    it('retrieves any recommendations from foursquare', function (done) {
        foursquare.getRecommendedVenues({near: "London"})
            .then(recommendedVenues => {
                expect(recommendedVenues).toEqual(dummyRecommended);
                done();
            })
            .catch(err => {
                fail(err);
                done();
            });

        let request = jasmine.Ajax.requests.mostRecent();
        expect(request.url).toBe('https://api.foursquare.com/v2/venues/explore?near=London');
        expect(request.method).toBe('GET');
        request.respondWith(dummyRecommendedResponse);
    });

    it('returns a promise that rejects if request fails', function (done) {
        foursquare.getTrendingVenues()
            .catch(err => {
                expect(err).toBeDefined();
                done();
            })

        let request = jasmine.Ajax.requests.mostRecent();
        request.respondWith(dummy404);
    });

})