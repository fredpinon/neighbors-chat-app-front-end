export function searchNeighbors (searchString) {
  const url = new URL('http://localhost:4000/search');
  const address = searchString
    .split(' ')
    .map(str => str.split(' '))
    .reduce((obj, arr, i) => {
      obj[i] = arr.join('_')
      return obj;
    }, {});
  Object.keys(address).forEach(key => url.searchParams.append(key, address[key]));
  const config = new Request (url.href, {method: 'GET'});
  return fetch(config);
}
