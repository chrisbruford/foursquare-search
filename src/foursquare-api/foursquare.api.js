export class Foursquare {
    getTrendingVenues(params) {
        return new Promise((resolve, reject) => {

            let qs = "?";
            let paramArray = [];

            for (let param in params) {
                paramArray.push(`${param}=${params[param]}`);
            }

            qs += paramArray.join("&");

            let xhr = new XMLHttpRequest();
            xhr.open('GET', `https://api.foursquare.com/v2/venues/trending${qs}`);

            xhr.onerror = err => {
                reject(err);
            }

            xhr.onabort = err => {
                reject(err);
            }

            xhr.onload = evt => {
                if (xhr.status == 200 && xhr.responseText) {
                    try {
                        let data = JSON.parse(xhr.responseText);
                        resolve(data);
                    } catch (e) {
                        reject({ error: e, data: xhr.responseText });
                    }
                } else {
                    reject(`Unable to retrieve data: \n server code: ${xhr.status} \n responseText: ${xhr.statusText}`);
                }
            }

            xhr.send();
        });
    }

    getRecommendedVenues(params) {
        return new Promise((resolve, reject) => {

            let qs = "?";
            let paramArray = [];

            for (let param in params) {
                paramArray.push(`${param}=${params[param]}`);
            }

            qs += paramArray.join("&");

            let xhr = new XMLHttpRequest();
            xhr.open('GET', `https://api.foursquare.com/v2/venues/explore${qs}`);

            xhr.onerror = err => {
                reject(err);
            }

            xhr.onabort = err => {
                reject(err);
            }

            xhr.onload = evt => {
                if (xhr.status == 200 && xhr.responseText) {
                    try {
                        let data = JSON.parse(xhr.responseText);
                        resolve(data);
                    } catch (e) {
                        reject({ error: e, data: xhr.responseText });
                    }
                } else {
                    reject(`Unable to retrieve data: \n server code: ${xhr.status} \n responseText: ${xhr.statusText}`);
                }
            }

            xhr.send();
        });
    }
}