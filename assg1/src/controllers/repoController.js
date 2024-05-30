import axios from 'axios';
const BASE_URL = "https://api.github.com";

export const fetchRepo = async() => {
    const response = await axios.get(`${BASE_URL}/repositories`);
    return response.data;
}