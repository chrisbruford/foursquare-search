

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
            xhr.open('GET', `/api/foursquare/trending${qs}`);

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
                        resolve(data.response.venues);
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
            xhr.open('GET', `/api/foursquare/recommended${qs}`);

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
                        resolve(data.response.groups[0].items);
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