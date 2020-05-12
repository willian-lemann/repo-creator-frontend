import axios from 'axios';

const api = axios.create({
    baseURL: 'https://repo-criador.herokuapp.com'
});

export default api;