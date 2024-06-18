import axios from "axios";

const request = axios.create({
  baseURL: 'https://250d8.wiremockapi.cloud',
})

export default request;