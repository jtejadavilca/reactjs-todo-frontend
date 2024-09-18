// use AxiosClient
import { BASE_URL } from '../utils/constants';
import { getToken } from '../utils/tokenHandler';
import AxiosClient from './impl/axiosClient';

class HttpClient {
    constructor(loginPage, token) {
        console.log('HttpClient token', {token});
        this.client = new AxiosClient(BASE_URL, loginPage, token);
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
const httpClient = new HttpClient();
const httpAuthClient = new HttpClient('/login', getToken());

module.exports = {
    httpClient,
    httpAuthClient,
};