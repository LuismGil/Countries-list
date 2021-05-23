const url = 'https://restcountries.eu/#api-endpoints-code';

function getFlags() {
  return fetch(`${url}/all)
    .then((res) => res.json())
    .then((res) => res.data);
}

export default {
  getFlags,
};
