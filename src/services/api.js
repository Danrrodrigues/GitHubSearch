import { create } from 'apisauce';

const api = create({
    baseURL:'https://api.github.com',
    headers: {
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'Githubsearch',
    }
});

export default api;