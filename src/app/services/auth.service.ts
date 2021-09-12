import {request} from '../utils/axios';

const API_URL = 'auth/';

class AuthService {
  login(username: string, password: string) {
    return request('post', API_URL + 'login', {username, password})
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(username: string, email: string, password: string) {
    return request('post', API_URL + 'signup', {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();
