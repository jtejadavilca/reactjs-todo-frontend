import axios from 'axios';


export default class AxiosClient {

    constructor(baseURL) {
        this.baseURL = baseURL;
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