import axios from "axios";

const instance = axios.create({
    baseURL: "https://node-type.onrender.com/api"
})
export default instance