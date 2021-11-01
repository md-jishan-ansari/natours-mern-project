import axios from 'axios';

import variable from '../config.js';
const { DB_ROUTE } = variable;

const Api = axios.create({ baseURL: DB_ROUTE });

Api.interceptors.request.use((req) => {
    const userData = JSON.parse(localStorage.getItem('profile'));
    // console.log(userData);
    if (userData) {
        req.headers.Authorization = `Bearer ${userData.token}`;
    }

    return req;
})

export const getAllTours = () => Api.get('/api/v1/tours');
export const getTour = (id) => Api.get(`/api/v1/tours/${id}`);

export const login = (userData) => Api.post('/api/v1/users/login', userData);
export const signup = (userData) => Api.post('/api/v1/users/signup', userData);
export const updateUser = (userData) => Api.patch('/api/v1/users/updateMe', userData);
export const updatePassword = (userData) => Api.patch('/api/v1/users/updateMyPassword', userData);
export const forgotPassword = (email) => Api.post('/api/v1/users/forgotPassword', { email });
export const resetPassword = (token, userData) => Api.patch(`/api/v1/users/resetPassword/${token}`, userData);

