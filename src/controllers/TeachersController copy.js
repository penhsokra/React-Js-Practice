import axios from 'axios';
axios.defaults.baseURL = 'https://nitc.cleverapps.io';

export const list = () => {
  return axios
    .get('/api/student/')
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
