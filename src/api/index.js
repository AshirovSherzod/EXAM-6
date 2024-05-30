import axios from "axios";

const API_URL = axios.create({
    baseURL: "https://dummyjson.com"
})

export default API_URL