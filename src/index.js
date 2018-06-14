import { Foursquare } from './foursquare-api/foursquare.api';

let foursquare = new Foursquare();

foursquare.getRecommendedVenues().then(console.dir);
foursquare.getTrendingVenues().then(console.dir);