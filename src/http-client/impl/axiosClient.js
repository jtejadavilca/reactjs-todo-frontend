import axios from 'axios';


export default class AxiosClient {

    constructor(baseURL, loginPage, token) {
        this.baseURL = baseURL;
        console.log('axios token', {token});
        if(token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }

        if(loginPage) {
            axios.interceptors.response.use(
                response => response,
                error => {
                    if(error.response.status === 401) {
                        window.location.href = loginPage;
                        
                    }
                    return Promise.reject(error);
                }
            );
        }
    }

    async get(url) {
        const response = await axios.get(`${this.baseURL}${url}`);
        return response.data;
    }

    async post(url, data) {
        const response = await axios.post(`${this.baseURL}${url}`, data);
        return response.data;
    }

    async put(url, data) {
        const response = await axios.put(`${this.baseURL}${url}`, data);
        return response.data;
    }

    async delete(url) {
        const response = await axios.delete(`${this.baseURL}${url}`);
        return response.data;
    }
}