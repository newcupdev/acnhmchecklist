import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { bugs } from './bugs';
import { fishes } from './fishes';
import { seacreatures } from './seacreatures';
import { arts } from './arts';
import { fossils } from './fossils';
import { bugDonations } from './bugDonations';
import { fishDonations } from './fishDonations';
import { seacreatureDonations } from './seacreatureDonations';
import { artDonations } from './artDonations';
import { fossilDonations } from './fossilDonations';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const config = {
    key: 'root',
    storage,
    debug: true
}

export const ConfigureStore = () => {
    const store = createStore(
        persistCombineReducers(config, {
            bugs,
            fishes,
            seacreatures,
            arts,
            fossils,
            bugDonations,
            fishDonations,
            seacreatureDonations,
            artDonations,
            fossilDonations
        }),
        applyMiddleware(thunk, logger)
    );

    const persistor = persistStore(store);

    return { persistor, store };
};