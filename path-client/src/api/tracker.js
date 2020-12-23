import axios from "axios";

export default axios.create({
  // baseURL: process.env.NGROK_URI,
  baseURL: "http://db0549d88076.ngrok.io",
});
