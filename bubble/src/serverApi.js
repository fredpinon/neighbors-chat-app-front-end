import base64 from 'base-64';

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

export function loginUserServerApi (data) {
  const config = new Request ('http://localhost:4000/login', {
      method: 'POST',
      body : JSON.stringify(data),
	    headers: new Headers({
		    'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(data.username + ":" + data.password)
	    })
    })
  return fetch(config);
}

export function logoutUser (data) {
  const config = new Request (`http://localhost:4000/logout/:${data}`, {
      method: 'PUT',
    })
  return fetch(config);
}

export function deleteUser (data) {
  const config = new Request (`http://localhost:4000/deleteUser/:${data}`, {
      method: 'DELETE',
    })
  return fetch(config);
}
