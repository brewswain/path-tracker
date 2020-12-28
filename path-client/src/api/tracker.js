import axios from "axios";
import { proc } from "react-native-reanimated";

export default axios.create({
  // baseURL: process.env.NGROK_URI,
  baseURL: process.env.NGROK_URI,
});
