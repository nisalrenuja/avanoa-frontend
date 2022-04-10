import axios from 'axios'

const axiosIns = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_SERVER_URL,
})

export default axiosIns
