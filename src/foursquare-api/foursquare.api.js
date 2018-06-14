export class Foursquare {
    getTrendingVenues() {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://api.foursquare.com/v2/venues/trending');

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

    getRecommendedVenues() {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', `https://api.foursquare.com/v2/venues/explore`);

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