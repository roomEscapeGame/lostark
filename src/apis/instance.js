import axios from 'axios';

const API_BASE_URL = 'https://developer-lostark.game.onstove.com/';

export const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.REACT_APP_LOSTARK_API_KEY
    }
});