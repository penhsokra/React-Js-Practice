const Config = () => {
  const axios = require('axios');
  axios.defaults.baseURL = 'https://nitc.cleverapps.io';
  axios.defaults.headers.common['Authorization'] = '';
  // Add a request interceptor
  axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
};

export default Config;
