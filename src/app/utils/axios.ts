import axios from 'axios';

const DOMAIN = 'https://jssampletest.herokuapp.com/api/';
axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해


export const request = (method: any, url: string, data?: any) =>
  axios({
    method,
    url: DOMAIN + url,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    withCredentials: false,
    data,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
