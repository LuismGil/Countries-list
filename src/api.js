/* eslint-disable no-console */
const url = 'https://restcountries.eu/rest/v2';

function getCountries() {
  return fetch(`${url}/all`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.error(error));
}

function getCountry(currency) {
  return fetch(`${url}/alpha/${currency}`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.error(error));
}

export default {
  getCountries,
  getCountry,
};
