const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error);
    throw error;
  }
}

const parseJSON = response => {
  return response.json();
}

const fetchTickets = (reload, cb) => {
  const query = reload ? '?refresh=1' : '';
  return fetch(`tickets${query}`, {
    accept: 'application/json'
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

const getTickets = cb => {
  return fetchTickets(false, cb);
}

const reloadTickets = cb => {
  return fetchTickets(true, cb);
}

const saveTickets = (tickets) => {
  return fetch('tickets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({tickets: tickets})
  });
}

const Client = { getTickets, reloadTickets, saveTickets };
export default Client;