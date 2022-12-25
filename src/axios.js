import axios from "axios";

console.log("this is axios.js");

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-d484f/us-central1/api' // The API url
})

export default instance;