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

const getStatus = async (startDate, endDate) => api.get(`${contenfulApiURL}?content_type=services&sys.createdAt[gte]=${startDate}&sys.createdAt[lte]=${endDate}&order=-sys.createdAt`, {}).json();

export {
    baseUrl,
    getStatus,
};
