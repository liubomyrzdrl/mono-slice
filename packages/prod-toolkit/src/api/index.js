import axios from 'axios';

export const usersApi = {
    getUsers() {
        return axios.get('https://jsonplaceholder.typicode.com/users');
    }
};
