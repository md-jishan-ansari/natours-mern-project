import { AUTH_SUCCESS, LOGOUT_SUCCESS, AUTH_UPDATE_USER, AUTH_UPDATE_PASSWORD } from '../constants/authanticationConstant';

export const loginReducer = (state = { userData: {} }, action) => {
    switch (action.type) {
        case AUTH_UPDATE_PASSWORD:
        case AUTH_SUCCESS:
            localStorage.setItem("profile", JSON.stringify(action.payload));
            return { ...state, userData: action.payload }
        case LOGOUT_SUCCESS:
            localStorage.removeItem('profile');
            return { ...state, userData: "" }
        case AUTH_UPDATE_USER:
            let profile = JSON.parse(localStorage.getItem('profile'));
            profile.data.user = action.payload.data.user;
            localStorage.setItem("profile", JSON.stringify(profile));
            return { ...state, userData: action.payload }
        default: return state
    }
}