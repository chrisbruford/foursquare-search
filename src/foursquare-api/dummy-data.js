export let dummyRecommended = {
    "meta": {
        "code": 200,
        "requestId": "5ac51ef86a607143de8eg5cb"
    },
    "response": {
        "warning": {
            "text": "There aren't a lot of results near you. Try something more general, reset your filters, or expand the search area."
        },
        "suggestedRadius": 600,
        "headerLocation": "Lower East Side",
        "headerFullLocation": "Lower East Side, New York",
        "headerLocationGranularity": "neighborhood",
        "totalResults": 230,
        "suggestedBounds": {
            "ne": {
                "lat": 40.724216906965616,
                "lng": -73.9896507407283
            },
            "sw": {
                "lat": 40.72151724718017,
                "lng": -73.98693222860872
            }
        },
        "groups": [
            {
                "type": "Recommended Places",
                "name": "recommended",
                "items": [
                    {
                        "reasons": {
                            "count": 0,
                            "items": [
                                {
                                    "summary": "This spot is popular",
                                    "type": "general",
                                    "reasonName": "globalInteractionReason"
                                }
                            ]
                        },
                        "venue": {
                            "id": "49b6e8d2f964a52016531fe3",
                            "name": "Russ & Daughters",
                            "location": {
                                "address": "179 E Houston St",
                                "crossStreet": "btwn Allen & Orchard St",
                                "lat": 40.72286707707289,
                                "lng": -73.98829148466851,
                                "labeledLatLngs": [
                                    {
                                        "label": "display",
                                        "lat": 40.72286707707289,
                                        "lng": -73.98829148466851
                                    }
                                ],
                                "distance": 130,
                                "postalCode": "10002",
                                "cc": "US",
                                "city": "New York",
                                "state": "NY",
                                "country": "United States",
                                "formattedAddress": [
                                    "179 E Houston St (btwn Allen & Orchard St)",
                                    "New York, NY 10002",
                                    "United States"
                                ]
                            },
                            "categories": [
                                {
                                    "id": "4bf58dd8d48988d1f5941735",
                                    "name": "Gourmet Shop",
                                    "pluralName": "Gourmet Shops",
                                    "shortName": "Gourmet",
                                    "icon": {
                                        "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/food_gourmet_",
                                        "suffix": ".png"
                                    },
                                    "primary": true
                                }
                            ],
                            "venuePage": {
                                "id": "77298563"
                            }
                        }
                    }
                ]
            }
        ]
    }
};

export let dummyTrending = {
    "meta": {
        "code": 200,
        "requestId": "5ac51dde351e3d4df64064f8"
    },
    "response": {
        "venues": [
            {
                "id": "5735dc3f498e1ac6a088f324",
                "name": "Union Fare",
                "location": {
                    "address": "5 E 17th St",
                    "crossStreet": "btwn 5th Ave & Union Sq W",
                    "lat": 40.737697,
                    "lng": -73.991402,
                    "labeledLatLngs": [
                        {
                            "label": "display",
                            "lat": 40.737697,
                            "lng": -73.991402
                        }
                    ],
                    "distance": 1802,
                    "postalCode": "10003",
                    "cc": "US",
                    "city": "New York",
                    "state": "NY",
                    "country": "United States",
                    "formattedAddress": [
                        "5 E 17th St (btwn 5th Ave & Union Sq W)",
                        "New York, NY 10003",
                        "United States"
                    ]
                },
                "categories": [
                    {
                        "id": "4bf58dd8d48988d157941735",
                        "name": "New American Restaurant",
                        "pluralName": "New American Restaurants",
                        "shortName": "New American",
                        "icon": {
                            "prefix": "https://ss3.4sqi.net/img/categories_v2/food/newamerican_",
                            "suffix": ".png"
                        },
                        "primary": true
                    }
                ]
            }
        ]
    }
}

export let dummyLocationError = {
    "meta": {
        "code": 400,
        "errorType": "failed_geocode",
        "errorDetail": "Couldn't geocode param near: asasdad",
        "requestId": "5b235ee96a607176a57e64b4"
    },
    "response": {}
}

export let dummyTrendingResponse = {
    status: 200,
    responseText: JSON.stringify(dummyTrending)
}

export let dummyRecommendedResponse = {
    status: 200,
    responseText: JSON.stringify(dummyRecommended)
}

export let dummyLocationErrorResponse = {
    status: 200,
    responseText: JSON.stringify(dummyLocationError)
}

export let dummy404 = {
    status: 404,
    statusText: "Page not found"
}