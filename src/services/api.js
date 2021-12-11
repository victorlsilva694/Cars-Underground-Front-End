const axios = require("axios").default;

const api = axios.create({baseURL: 'http://localhost:3333/'})
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if(token){
    config.headers.authorization = `Bearer ${token}`;
  }
  else{
    delete config.headers.authorization;
  }

  return config;
})


export default api;