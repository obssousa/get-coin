import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com/finance?key=337e84d3'
})

// api.interceptors.request.use(config => {
//   config.params = {
//     key: '337e84d3'
//   }
//   return config
// })

export default api
