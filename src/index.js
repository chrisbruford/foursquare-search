import { Foursquare } from './foursquare-api/foursquare.api';

let foursquare = new Foursquare();

foursquare.getRecommendedVenues({near: "London"}).then(console.dir);
foursquare.getTrendingVenues({near: "London"}).then(console.dir);