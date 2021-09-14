import {request} from '../utils/axios';

const API_URL = 'member/';

class MemberService {
  get() {
    return request('get', API_URL)
      .then((response) => {
        return response.data;
      });
  }

  getAll() {
    return request('get', API_URL + 'all')
      .then((response) => {
        return response.data;
      });
  }

}

export default new MemberService();
