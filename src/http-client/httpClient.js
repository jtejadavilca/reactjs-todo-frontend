// use AxiosClient
import { BASE_URL } from '../utils/constants';
import AxiosClient from './impl/axiosClient';

export default class HttpClient {
    constructor() {
        this.client = new AxiosClient(BASE_URL);
    }

    async get(url) {
        return this.client.get(url);
    }

    async post(url, data) {
        return this.client.post(url, data);
    }

    async put(url, data) {
        return this.client.put(url, data);
    }

    async delete(url) {
        return this.client.delete(url);
    }
}