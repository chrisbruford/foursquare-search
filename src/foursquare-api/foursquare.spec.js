import { Foursquare } from './foursquare.api';
import { dummyTrendingResponse, dummyRecommendedResponse, dummyRecommended, dummyTrending, dummyLocationErrorResponse, dummy404 } from './dummy-data';
require('jasmine-ajax');

describe('Foursquare API', function () {

    let foursquare = new Foursquare();

    beforeEach(function () {
        jasmine.Ajax.install();
    });

    afterEach(function () {
        jasmine.Ajax.uninstall();
    })

    it('exists', function () {
        expect(foursquare).not.toBe(undefined);
    });

    describe('getRecommendedVenues',function(){

        it('retrieves any recommendations from foursquare', function (done) {
            foursquare.getRecommendedVenues({ near: "London" })
                .then(recommendedVenues => {
                    expect(recommendedVenues).toEqual(dummyRecommended.response.groups[0].items);
                    done();
                })
                .catch(err => {
                    fail(err);
                    done();
                });
    
            let request = jasmine.Ajax.requests.mostRecent();
            expect(request.url).toBe('/api/foursquare/recommended?near=London');
            expect(request.method).toBe('GET');
            request.respondWith(dummyRecommendedResponse);
        });

        it('returns a promise that rejects if request fails', function (done) {
            foursquare.getRecommendedVenues()
                .catch(err => {
                    expect(err).toBeDefined();
                    done();
                })

            let request = jasmine.Ajax.requests.mostRecent();
            request.respondWith(dummy404);
        });

        it('passes errortype through from foursquare', function (done) {
            foursquare.getRecommendedVenues('not a real location')
                .catch(err => {
                    expect(err).toBe("failed_geocode");
                    done();
                })

            let request = jasmine.Ajax.requests.mostRecent();
            request.respondWith(dummyLocationErrorResponse);
        });
    });

    describe('getTrendingVenues', function () {

        it('retrieves retrieves trending venues from foursquare', function (done) {
            foursquare.getTrendingVenues({ near: "London" })
                .then(trendingVenues => {
                    expect(trendingVenues).toEqual(dummyTrending.response.venues);
                    done();
                })
                .catch(err => {
                    fail(err);
                    done();
                });
    
            let request = jasmine.Ajax.requests.mostRecent();
            expect(request.url).toBe('/api/foursquare/trending?near=London');
            expect(request.method).toBe('GET');
            request.respondWith(dummyTrendingResponse);
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

        it('passes errortype through from foursquare', function (done) {
            foursquare.getTrendingVenues('not a real location')
                .catch(err => {
                    expect(err).toBe("failed_geocode");
                    done();
                })

            let request = jasmine.Ajax.requests.mostRecent();
            request.respondWith(dummyLocationErrorResponse);
        });
    });



})