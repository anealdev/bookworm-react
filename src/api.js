import axios from 'axios'; // http client, promis based. Client makes requests
export default {
  user: {
    login: (credentials) => axios.post('/api/auth', {credentials}).then(res =>
      res.data.user)
  }
};
