import axios from "axios";
require('dotenv').config()
export default axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "content-type": "application/json",
  },
});