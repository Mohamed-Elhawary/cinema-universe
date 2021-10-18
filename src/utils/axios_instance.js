import axios from 'axios';
import { URL } from 'consts';

const axios_instance = axios.create({
    baseURL: URL
});

axios_instance.interceptors.response.use(response => {
    
    console.log("response", response);
    
    return response;
    
    }, error => {
    
    console.log("error", error);
    
    return Promise.reject(error);
});

export default axios_instance;