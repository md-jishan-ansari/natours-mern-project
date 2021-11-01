import * as actionType from '../constants/tourConstants';

export const toursReducer = (state = { AllTours: [] }, action) => {
    switch (action.type) {
        case actionType.GET_ALL_TOUR_SUCCESS:
            return { AllTours: action.payload }
        case actionType.GET_ALL_TOUR_FAIL:
            return { error: action.payload }
        default:
            return state;
    }
}

export const tourReducer = (state = { Tour: [], error: {} }, action) => {
    switch (action.type) {
        case actionType.GET_TOUR_SUCCESS:
            return { Tour: action.payload, error: {} }
        case actionType.GET_TOUR_FAIL:
            return { Tour: {}, error: action.payload.data }
        default:
            return state;
    }
}

