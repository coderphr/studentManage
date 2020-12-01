import axios from 'axios';

export function request(config) {
  let instence = {
    baseURL:'http://localhost:3000',
    timeout:5000
  }
  
  const _axios = axios.create(instence);
  
  
  //请求拦截
  _axios.interceptors.request.use(
    req => {
      return req
    },
    err => Promise.reject(err)
  )
  
  
  //响应拦截
  _axios.interceptors.response.use(
    res => res.data,
    err => Promise.reject(err)
  )

  return _axios(config)
}