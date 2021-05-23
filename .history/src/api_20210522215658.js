const url = 'https://restcountries.eu/#api-endpoints-code';

function getFlags() {
  return fetch(`${url}/data/flag`)
    .then((res) => res.json())
    .then((res) => res.data);
}
