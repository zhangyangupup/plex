import axios from 'axios'
import $config from '../baseConfig.js'
const $http = {}
axios.defaults.baseURL = $config.baseURL
axios.defaults.timeout = 600000
axios.defaults.withCredentials = false
$http.post = (url, data) => {
  return axios({
    url: url,
    method: 'post',
    data: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  })
}

$http.get = (url) => {
  return axios({
    url: url,
    method: 'get'
  })
}

export default $http
