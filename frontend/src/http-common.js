import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const http = axios.create({
  baseURL: "http://localhost:8000",
});

export default http;
