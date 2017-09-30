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

export function registerNewUser (data) {
  const config = new Request ('http://localhost:4000/signup', {
      method: 'POST',
      body : JSON.stringify(data),
	    headers: new Headers({
		    'Content-Type': 'application/json'
	    })
    })
  return fetch(config);
}
