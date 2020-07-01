import axios from "axios"

const config = {
  baseURL: "http//:127.0.0.1"
}

const axios = axios.create(config)

axios.interceptors.request.use(
  req =>{
    
  },
  err =>{
    
  }
)
axios.interceptors.response.use()
axios.get(url, {params: "string"})