import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { bugs } from './bugs';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            bugs
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}