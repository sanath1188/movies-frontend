import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const setLocalAuthToken = (token) => {
  cookies.remove('auth_token');
  let authTokenExpirationDate = new Date();
  authTokenExpirationDate.setDate(authTokenExpirationDate.getDate() + 7);
  cookies.set('auth_token', token, { path: '/', expires: authTokenExpirationDate });
}

export const getCookie = (key) => {
  return cookies.get(key);
}

export const deleteCookie = (key) => {
  cookies.remove(key);
}