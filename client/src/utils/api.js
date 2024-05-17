import axios from 'axios';

const api = axios.create({
  baseURL:'/',
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err) {
        console.log(err)
    }
    return Promise.reject(err);
  }
);

export default api;