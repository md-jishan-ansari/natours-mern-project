import { AUTH_SUCCESS, SUCCESS, ERROR, AUTH_UPDATE_USER, AUTH_UPDATE_PASSWORD } from '../constants/authanticationConstant.js';
import * as api from '../api.js';

import { Alert } from '../Alert.js';


export const login = (user, history) => async (dispatch) => {
    try {
        const { data } = await api.login(user);

        dispatch({ type: AUTH_SUCCESS, payload: data });
        Alert(SUCCESS, 'Login successful');
        history.push('/');
    } catch (error) {
        Alert(ERROR, error.response.data.message);
    }
}

export const signup = (user, history) => async (dispatch) => {
    try {
        const { data } = await api.signup(user);
        dispatch({ type: AUTH_SUCCESS, payload: data });
        Alert(SUCCESS, 'signup successful');
        history.push('/');
    } catch (error) {
        Alert(ERROR, error.response.data.message);
    }
}

export const updateUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.updateUser(user);
        dispatch({ type: AUTH_UPDATE_USER, payload: data });
        Alert(SUCCESS, 'Update successful');
    } catch (error) {
        Alert(ERROR, error.response.data.message);
    }
}

export const updatePassword = (userData) => async (dispatch) => {
    try {
        const { data } = await api.updatePassword(userData);
        dispatch({ type: AUTH_UPDATE_PASSWORD, payload: data });
        Alert(SUCCESS, "Password updated successfully");
    } catch (error) {
        Alert(ERROR, error.response.data.message);
    }
}

export const forgotPassword = (email) => async (dispatch) => {
    try {
        const { data } = await api.forgotPassword(email);
        Alert(SUCCESS, data.message);
    } catch (error) {
        Alert(ERROR, error.response.data.message);
    }
}

export const resetPassword = (token, userData, history) => async (dispatch) => {
    try {
        await api.resetPassword(token, userData);
        Alert(SUCCESS, "Password reset successful!");
        history.push('/auth/login');
    } catch (error) {
        Alert(ERROR, error.response.data.message);
    }
}
