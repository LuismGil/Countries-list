const url = 'https://restcountries.eu/rest/v2';

function getCountries() {
  return fetch(`${url}/region/europe`)
    .then((res) => res.json())
    .then((res) => res.data);
}

export default {
  getCountries,
};
