const url = 'https://restcountries.eu/#api-endpoints-code';

function getCountries() {
  return fetch(`${url}/region`)
    .then((res) => res.json())
    .then((res) => res.data);
}

export default {
  getCountries,
};
