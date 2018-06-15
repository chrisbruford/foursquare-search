import { Foursquare } from './foursquare-api/foursquare.api';

let foursquare = new Foursquare();

let searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let location = document.querySelector('#location').value;
    let target = document.querySelector('#results');

    if (document.querySelector('#trending').checked) {
        foursquare.getTrendingVenues({ near: location })
            .then(venues => {
                target.innerHTML = "";
                for (let venue of venues) {
                    let listItem = document.createElement('a');
                    //TODO: google maps link?
                    // listItem.href = 
                    let categories = [];

                    for (let category of venue.categories) {
                        categories.push(category.name);
                    }

                    listItem.className = `list-group-item list-group-item-action flex-column align-items-start`;
                    listItem.innerHTML = `<div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">${venue.name}</h5>
                                            <small>${categories.join(", ")}</small>
                                        </div>
                                        <small>${venue.location.formattedAddress.join(", ")}</small>
                                        `;
                    target.appendChild(listItem);
                }
            })
            .catch(err => {
                if (err == "failed_geocode") { 
                    target.innerHTML = "<p>Sorry we couldn't recognise that location</p>";
                }
                else {
                    target.innerHTML = "<p>Sorry something went wrong. Please try again later or contact support.</p>";
                }
            });
    } else {
        foursquare.getRecommendedVenues({ near: location })
            .then(group => {
                target.innerHTML = "";
                for (let entry of group) {
                    let listItem = document.createElement('a');
                    //TODO: google maps link?
                    // listItem.href = 

                    let categories = [];

                    for (let category of entry.venue.categories) {
                        categories.push(category.name);
                    }

                    listItem.className = `list-group-item list-group-item-action flex-column align-items-start`;
                    listItem.innerHTML = `<div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">${entry.venue.name}</h5>
                                            <small>${categories}</small>
                                        </div>
                                        <small>${entry.venue.location.address}, ${entry.venue.location.city}, ${entry.venue.location.country}</small>
                                        `;
                    target.appendChild(listItem);
                }
            })
            .catch(err => {
                if (err == "failed_geocode") { 
                    target.innerHTML = "<p>Sorry we couldn't recognise that location</p>";
                }
                else {
                    target.innerHTML = "<p>Sorry something went wrong. Please try again later or contact support.</p>";
                }
            });
    }
})

