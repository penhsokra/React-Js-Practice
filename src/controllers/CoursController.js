import axios from 'axios';
axios.defaults.baseURL = 'https://nitc.cleverapps.io';

export const list = () => {
  return axios.get('/api/courses');
};
export const create = (data) => {
  return axios.post('/api/courses', data);
};
export const update = (data) => {
  return axios.put('/api/courses', data);
};
export const deletes = (id) => {
  return axios.delete('/api/courses' + id);
};
