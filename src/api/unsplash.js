import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Hob8U4fDYTEWZg2crcR1U5RG1bhUyAjB0TIxfposHNg'
    }
});