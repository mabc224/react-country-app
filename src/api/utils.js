import axios from 'axios'
// import 'dotenv/config'

const API_BASE_PATH = process.env.REACT_APP_REST_API
const API_VERSION = process.env.REACT_APP_REST_API_VERSION
const defaultVersion = 'v3.1'

export async function makeApiCall (method, endpoint, opts = {}) {
 const version = opts.apiVersion || API_VERSION || defaultVersion
 const url = `${API_BASE_PATH}/${version}/${endpoint}`

 return axios({
  url,
  method,
  data: opts.data,
 })
}
