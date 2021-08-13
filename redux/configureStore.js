import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { bugs } from './bugs';
import { fishes } from './fishes';
import { seacreatures } from './seacreatures';
import { arts } from './arts';
import { fossils } from './fossils';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            bugs,
            fishes,
            seacreatures,
            arts,
            fossils
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}