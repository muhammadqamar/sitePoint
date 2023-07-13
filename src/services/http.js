import axios from 'axios';

const baseURL = window.__RUNTIME_CONFIG__?.REACT_APP_API_URL;

const http = axios.create({ baseURL: `${baseURL}/v1` });

function getAuthHeader() {

  let authHeader = { 'Content-Type': 'application/json' };
  authHeader = { Authorization: `Bearer ${accessToken}` };

  return authHeader;
}

function get(url, headers = {}, params = {}, signal = null) {
  return http.get(url, {
    params,
    signal,
    headers: { ...getAuthHeader(), ...headers },
  });
}

function post(url, data, headers = {}, params = {}) {
  return http.post(url, data, {
    ...params,
    headers: { ...getAuthHeader(), ...headers },
  });
}

function put(url, data, headers = {}) {
  return http.put(url, data, { headers: { ...getAuthHeader(), ...headers } });
}

function remove(url, data, headers = {}) {
  return http.delete(url, {
    headers: { ...getAuthHeader(), ...headers },
    data,
  });
}



export default {
  http,
  get,
  post,
  put,
  remove,

};