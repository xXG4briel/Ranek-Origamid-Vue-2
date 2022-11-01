import axios from 'axios';

const axiosInstace = axios.create({
    baseURL: 'http://localhost:3000'
})

export const api = {
    get(endpoint){
        return axios.get('http://localhost:3000' + endpoint);
    }
}