import axios from "axios"
import {
  RAVINDER_CONNECTOR_USERNAME,
  RAVINDER_CONNECTOR_PASSWORD
} from "react-native-dotenv"
const ravinderconnector = axios.create({
  baseURL: "https://www.google.com/",
  auth: {
    username: RAVINDER_CONNECTOR_USERNAME,
    password: RAVINDER_CONNECTOR_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
