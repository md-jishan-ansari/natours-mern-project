import { GET_ALL_TOUR_SUCCESS, GET_ALL_TOUR_FAIL, GET_TOUR_SUCCESS, GET_TOUR_FAIL } from '../constants/tourConstants';
import * as api from '../api.js';

export const getAllTours = () => async (dispatch) => {
    try {
        const { data } = await api.getAllTours();
        dispatch({ type: GET_ALL_TOUR_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ALL_TOUR_FAIL, payload: error.response });
    }
}

export const getTour = (id) => async (dispatch) => {
    try {
        const { data } = await api.getTour(id);
        dispatch({ type: GET_TOUR_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_TOUR_FAIL, payload: error.response })
    }
}