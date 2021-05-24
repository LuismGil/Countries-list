const url = 'https://restcountries.eu/rest/v2';

function getCountries() {
  return fetch(`${url}/all`)
    .then((res) => res.json())
    .then((res) => res)
    // eslint-disable-next-line no-console
    .catch((error) => console.error(error));
}

function getRegion(reg) {
  return fetch(`${url}/region/${reg}`)
    .then(((res) => res.json()))
    .then((res) => res);
}

export default {
  getCountries,
  getRegion,
};
