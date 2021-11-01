import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { toursReducer, tourReducer } from './reducers/toursReducer.js';
import { loginReducer } from './reducers/authanticationReducer.js';

const reducer = combineReducers({
    toursReducer,
    tourReducer,
    loginReducer,
})

const middleware = [thunk];

//store gets two arguments, 1) reducer and 2) middleware
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
