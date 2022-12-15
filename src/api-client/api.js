import ky from 'ky';

// API
const baseUrl = process.env.VUE_APP_BASE_URL;
const accessToken = process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN;
const contenfulApiURL = `${baseUrl}/entries`;
const api = ky.extend({
    hooks: {
        beforeRequest: [
            (request) => {
                request.headers.set('Authorization', `Bearer ${accessToken}`);
            },
        ],
    },
});

const getShows = async () => api.get(`${contenfulApiURL}?content_type=shows`, {}).json();

const getBooks = async () => api.get(`${contenfulApiURL}?content_type=books`, {}).json();


export {
    getShows,
    getBooks
};
