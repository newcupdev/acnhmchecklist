import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { bugs } from './bugs';
import { fishes } from './fishes';
import { seacreatures } from './seacreatures';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            bugs,
            fishes,
            seacreatures
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}