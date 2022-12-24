import axios from "axios";

const instance = axios.create({
    baseURL: '...' // The API url
})

export default instance;