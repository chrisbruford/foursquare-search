import { Foursquare } from './foursquare-api/foursquare.api';

let foursquare = new Foursquare();

let searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let location = document.querySelector('#location').value;
    let target = document.querySelector('#results');

    if (document.querySelector('#trending').checked) {
        console.log('doing things');
        foursquare.getTrendingVenues({ near: location })
            .then(venues => {
                console.dir(venues);
            });
    } else {
        foursquare.getRecommendedVenues({ near: location })
            .then(group => {
                target.innerHTML = "";
                for (let entry of group) {
                    let listItem = document.createElement('a');
                    //TODO: google maps link?
                    // listItem.href = 
                    listItem.className = `list-group-item list-group-item-action flex-column align-items-start`;
                    listItem.innerHTML = `<div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">${entry.venue.name}</h5>
                                            <small>${entry.reasons.items[0].summary}</small>
                                        </div>
                                        <small>${entry.venue.location.address}, ${entry.venue.location.city}, ${entry.venue.location.country}</small>
                                        `;
                    target.appendChild(listItem);
                }
            });
    }
})

