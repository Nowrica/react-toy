import axios from 'axios';

// const DOMAIN = 'http://localhost:8080/api/';
const DOMAIN = 'https://jssampletest.herokuapp.com/api/';
axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해


export const request = (method: any, url: string, data?: any) => {
  const user: any = localStorage.getItem('user');
  return axios({
    method,
    url: DOMAIN + url,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': user ? 'Bearer ' + JSON.parse(user).accessToken : ''
    },
    withCredentials: false,
    data,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

