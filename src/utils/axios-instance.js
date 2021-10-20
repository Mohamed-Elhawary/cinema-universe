import axios from 'axios';
import { BASE_URL } from 'consts';

const axios_instance = axios.create({baseURL: BASE_URL});

axios_instance.interceptors.response.use(response => {
        
    return response;
    
    }, error => {
    
    console.log("error", error);
    
    return Promise.reject(error);

});

export default axios_instance;