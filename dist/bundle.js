/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/foursquare-api/foursquare.api.js":
/*!**********************************************!*\
  !*** ./src/foursquare-api/foursquare.api.js ***!
  \**********************************************/
/*! exports provided: Foursquare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Foursquare\", function() { return Foursquare; });\n\n\nclass Foursquare {\n    getTrendingVenues(params) {\n        return new Promise((resolve, reject) => {\n\n            let qs = \"?\";\n            let paramArray = [];\n\n            for (let param in params) {\n                paramArray.push(`${param}=${params[param]}`);\n            }\n\n            qs += paramArray.join(\"&\");\n\n            let xhr = new XMLHttpRequest();\n            xhr.open('GET', `/api/foursquare/trending${qs}`);\n\n            xhr.onerror = err => {\n                reject(err);\n            }\n\n            xhr.onabort = err => {\n                reject(err);\n            }\n\n            xhr.onload = evt => {\n                if (xhr.status == 200 && xhr.responseText) {\n                    try {\n                        let data = JSON.parse(xhr.responseText);\n                        if (data.meta.code !== 200) {\n                            return reject(data.meta.errorType);\n                        }\n                        resolve(data.response.venues);\n                    } catch (e) {\n                        reject({ error: e, data: xhr.responseText });\n                    }\n                } else {\n                    reject(`Unable to retrieve data: \\n server code: ${xhr.status} \\n responseText: ${xhr.statusText}`);\n                }\n            }\n\n            xhr.send();\n        });\n    }\n\n    getRecommendedVenues(params) {\n        return new Promise((resolve, reject) => {\n\n            let qs = \"?\";\n            let paramArray = [];\n\n            for (let param in params) {\n                paramArray.push(`${param}=${params[param]}`);\n            }\n\n            qs += paramArray.join(\"&\");\n\n            let xhr = new XMLHttpRequest();\n            xhr.open('GET', `/api/foursquare/recommended${qs}`);\n\n            xhr.onerror = err => {\n                reject(err);\n            }\n\n            xhr.onabort = err => {\n                reject(err);\n            }\n\n            xhr.onload = evt => {\n                if (xhr.status == 200 && xhr.responseText) {\n                    try {\n                        let data = JSON.parse(xhr.responseText);\n                        if (data.meta.code !== 200) {\n                            return reject(data.meta.errorType);\n                        }\n                        resolve(data.response.groups[0].items);\n                    } catch (e) {\n                        reject({ error: e, data: xhr.responseText });\n                    }\n                } else {\n                    reject(`Unable to retrieve data: \\n server code: ${xhr.status} \\n responseText: ${xhr.statusText}`);\n                }\n            }\n\n            xhr.send();\n        });\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZm91cnNxdWFyZS1hcGkvZm91cnNxdWFyZS5hcGkuanM/ZDQwNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsTUFBTSxHQUFHLGNBQWM7QUFDMUQ7O0FBRUE7O0FBRUE7QUFDQSx1REFBdUQsR0FBRzs7QUFFMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGdDQUFnQyxtQ0FBbUM7QUFDbkU7QUFDQSxpQkFBaUI7QUFDakIsdUVBQXVFLFdBQVcsb0JBQW9CLGVBQWU7QUFDckg7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsTUFBTSxHQUFHLGNBQWM7QUFDMUQ7O0FBRUE7O0FBRUE7QUFDQSwwREFBMEQsR0FBRzs7QUFFN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGdDQUFnQyxtQ0FBbUM7QUFDbkU7QUFDQSxpQkFBaUI7QUFDakIsdUVBQXVFLFdBQVcsb0JBQW9CLGVBQWU7QUFDckg7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBIiwiZmlsZSI6Ii4vc3JjL2ZvdXJzcXVhcmUtYXBpL2ZvdXJzcXVhcmUuYXBpLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBjbGFzcyBGb3Vyc3F1YXJlIHtcbiAgICBnZXRUcmVuZGluZ1ZlbnVlcyhwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgbGV0IHFzID0gXCI/XCI7XG4gICAgICAgICAgICBsZXQgcGFyYW1BcnJheSA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBwYXJhbSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBwYXJhbUFycmF5LnB1c2goYCR7cGFyYW19PSR7cGFyYW1zW3BhcmFtXX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcXMgKz0gcGFyYW1BcnJheS5qb2luKFwiJlwiKTtcblxuICAgICAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGAvYXBpL2ZvdXJzcXVhcmUvdHJlbmRpbmcke3FzfWApO1xuXG4gICAgICAgICAgICB4aHIub25lcnJvciA9IGVyciA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHhoci5vbmFib3J0ID0gZXJyID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGV2dCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwICYmIHhoci5yZXNwb25zZVRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm1ldGEuY29kZSAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChkYXRhLm1ldGEuZXJyb3JUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YS5yZXNwb25zZS52ZW51ZXMpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoeyBlcnJvcjogZSwgZGF0YTogeGhyLnJlc3BvbnNlVGV4dCB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChgVW5hYmxlIHRvIHJldHJpZXZlIGRhdGE6IFxcbiBzZXJ2ZXIgY29kZTogJHt4aHIuc3RhdHVzfSBcXG4gcmVzcG9uc2VUZXh0OiAke3hoci5zdGF0dXNUZXh0fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0UmVjb21tZW5kZWRWZW51ZXMocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBxcyA9IFwiP1wiO1xuICAgICAgICAgICAgbGV0IHBhcmFtQXJyYXkgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgcGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1BcnJheS5wdXNoKGAke3BhcmFtfT0ke3BhcmFtc1twYXJhbV19YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHFzICs9IHBhcmFtQXJyYXkuam9pbihcIiZcIik7XG5cbiAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCBgL2FwaS9mb3Vyc3F1YXJlL3JlY29tbWVuZGVkJHtxc31gKTtcblxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB4aHIub25hYm9ydCA9IGVyciA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSBldnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCAmJiB4aHIucmVzcG9uc2VUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5tZXRhLmNvZGUgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZGF0YS5tZXRhLmVycm9yVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEucmVzcG9uc2UuZ3JvdXBzWzBdLml0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHsgZXJyb3I6IGUsIGRhdGE6IHhoci5yZXNwb25zZVRleHQgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoYFVuYWJsZSB0byByZXRyaWV2ZSBkYXRhOiBcXG4gc2VydmVyIGNvZGU6ICR7eGhyLnN0YXR1c30gXFxuIHJlc3BvbnNlVGV4dDogJHt4aHIuc3RhdHVzVGV4dH1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/foursquare-api/foursquare.api.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _foursquare_api_foursquare_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foursquare-api/foursquare.api */ \"./src/foursquare-api/foursquare.api.js\");\n\n\nlet foursquare = new _foursquare_api_foursquare_api__WEBPACK_IMPORTED_MODULE_0__[\"Foursquare\"]();\n\nlet searchForm = document.querySelector('#search-form');\n\nsearchForm.addEventListener('submit', function (evt) {\n    evt.preventDefault();\n    let location = document.querySelector('#location').value;\n    let target = document.querySelector('#results');\n\n    if (document.querySelector('#trending').checked) {\n        foursquare.getTrendingVenues({ near: location })\n            .then(venues => {\n                target.innerHTML = \"\";\n                for (let venue of venues) {\n                    let listItem = document.createElement('a');\n                    //TODO: google maps link?\n                    // listItem.href = \n                    let categories = [];\n\n                    for (let category of venue.categories) {\n                        categories.push(category.name);\n                    }\n\n                    listItem.className = `list-group-item list-group-item-action flex-column align-items-start`;\n                    listItem.innerHTML = `<div class=\"d-flex w-100 justify-content-between\">\n                                            <h5 class=\"mb-1\">${venue.name}</h5>\n                                            <small>${categories.join(\", \")}</small>\n                                        </div>\n                                        <small>${venue.location.formattedAddress.join(\", \")}</small>\n                                        `;\n                    target.appendChild(listItem);\n                }\n            })\n            .catch(err => {\n                if (err == \"failed_geocode\") { \n                    target.innerHTML = \"<p>Sorry we couldn't recognise that location</p>\";\n                }\n                else {\n                    target.innerHTML = \"<p>Sorry something went wrong. Please try again later or contact support.</p>\";\n                }\n            });\n    } else {\n        foursquare.getRecommendedVenues({ near: location })\n            .then(group => {\n                target.innerHTML = \"\";\n                for (let entry of group) {\n                    let listItem = document.createElement('a');\n                    //TODO: google maps link?\n                    // listItem.href = \n\n                    let categories = [];\n\n                    for (let category of entry.venue.categories) {\n                        categories.push(category.name);\n                    }\n\n                    listItem.className = `list-group-item list-group-item-action flex-column align-items-start`;\n                    listItem.innerHTML = `<div class=\"d-flex w-100 justify-content-between\">\n                                            <h5 class=\"mb-1\">${entry.venue.name}</h5>\n                                            <small>${categories}</small>\n                                        </div>\n                                        <small>${entry.venue.location.address}, ${entry.venue.location.city}, ${entry.venue.location.country}</small>\n                                        `;\n                    target.appendChild(listItem);\n                }\n            })\n            .catch(err => {\n                if (err == \"failed_geocode\") { \n                    target.innerHTML = \"<p>Sorry we couldn't recognise that location</p>\";\n                }\n                else {\n                    target.innerHTML = \"<p>Sorry something went wrong. Please try again later or contact support.</p>\";\n                }\n            });\n    }\n})\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFxQjs7QUFFckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0MsaUJBQWlCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0RBQStELFdBQVc7QUFDMUUscURBQXFELHNCQUFzQjtBQUMzRTtBQUNBLGlEQUFpRCwyQ0FBMkM7QUFDNUY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsOEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLEtBQUs7QUFDTCx5Q0FBeUMsaUJBQWlCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtEQUErRCxpQkFBaUI7QUFDaEYscURBQXFELFdBQVc7QUFDaEU7QUFDQSxpREFBaUQsNkJBQTZCLElBQUksMEJBQTBCLElBQUksNkJBQTZCO0FBQzdJO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLENBQUMiLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3Vyc3F1YXJlIH0gZnJvbSAnLi9mb3Vyc3F1YXJlLWFwaS9mb3Vyc3F1YXJlLmFwaSc7XG5cbmxldCBmb3Vyc3F1YXJlID0gbmV3IEZvdXJzcXVhcmUoKTtcblxubGV0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWZvcm0nKTtcblxuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2F0aW9uJykudmFsdWU7XG4gICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRzJyk7XG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyZW5kaW5nJykuY2hlY2tlZCkge1xuICAgICAgICBmb3Vyc3F1YXJlLmdldFRyZW5kaW5nVmVudWVzKHsgbmVhcjogbG9jYXRpb24gfSlcbiAgICAgICAgICAgIC50aGVuKHZlbnVlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdmVudWUgb2YgdmVudWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBnb29nbGUgbWFwcyBsaW5rP1xuICAgICAgICAgICAgICAgICAgICAvLyBsaXN0SXRlbS5ocmVmID0gXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yaWVzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY2F0ZWdvcnkgb2YgdmVudWUuY2F0ZWdvcmllcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5Lm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0uY2xhc3NOYW1lID0gYGxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0YDtcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0uaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJkLWZsZXggdy0xMDAganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibWItMVwiPiR7dmVudWUubmFtZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+JHtjYXRlZ29yaWVzLmpvaW4oXCIsIFwiKX08L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD4ke3ZlbnVlLmxvY2F0aW9uLmZvcm1hdHRlZEFkZHJlc3Muam9pbihcIiwgXCIpfTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyciA9PSBcImZhaWxlZF9nZW9jb2RlXCIpIHsgXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5pbm5lckhUTUwgPSBcIjxwPlNvcnJ5IHdlIGNvdWxkbid0IHJlY29nbmlzZSB0aGF0IGxvY2F0aW9uPC9wPlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmlubmVySFRNTCA9IFwiPHA+U29ycnkgc29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIgb3IgY29udGFjdCBzdXBwb3J0LjwvcD5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3Vyc3F1YXJlLmdldFJlY29tbWVuZGVkVmVudWVzKHsgbmVhcjogbG9jYXRpb24gfSlcbiAgICAgICAgICAgIC50aGVuKGdyb3VwID0+IHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBlbnRyeSBvZiBncm91cCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vVE9ETzogZ29vZ2xlIG1hcHMgbGluaz9cbiAgICAgICAgICAgICAgICAgICAgLy8gbGlzdEl0ZW0uaHJlZiA9IFxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yaWVzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY2F0ZWdvcnkgb2YgZW50cnkudmVudWUuY2F0ZWdvcmllcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5Lm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0uY2xhc3NOYW1lID0gYGxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0YDtcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0uaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJkLWZsZXggdy0xMDAganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibWItMVwiPiR7ZW50cnkudmVudWUubmFtZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+JHtjYXRlZ29yaWVzfTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPiR7ZW50cnkudmVudWUubG9jYXRpb24uYWRkcmVzc30sICR7ZW50cnkudmVudWUubG9jYXRpb24uY2l0eX0sICR7ZW50cnkudmVudWUubG9jYXRpb24uY291bnRyeX08L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIgPT0gXCJmYWlsZWRfZ2VvY29kZVwiKSB7IFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuaW5uZXJIVE1MID0gXCI8cD5Tb3JyeSB3ZSBjb3VsZG4ndCByZWNvZ25pc2UgdGhhdCBsb2NhdGlvbjwvcD5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5pbm5lckhUTUwgPSBcIjxwPlNvcnJ5IHNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyIG9yIGNvbnRhY3Qgc3VwcG9ydC48L3A+XCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxufSlcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });