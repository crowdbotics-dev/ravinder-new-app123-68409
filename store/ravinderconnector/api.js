import axios from "axios";
import "react-native-dotenv";
const ravinderconnector = axios.create({
  baseURL: "https://www.google.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
export const apiService = {};