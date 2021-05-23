const url = 'https://restcountries.eu/#api-endpoints-code';

function getFlags() {
  return fetch(`${url}/assets?limit=20`)
    .then((res) => res.json())
    .then((res) => res.data);
}
