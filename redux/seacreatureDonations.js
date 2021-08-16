import * as ActionTypes from './ActionTypes';

export const seacreatureDonations = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_SEACREATURE_DONATION:
            if (state.includes(action.payload)) {
                return state;
            }
            return state.concat(action.payload);

            case ActionTypes.DELETE_SEACREATURE_DONATION:
                return state.filter(seacreatureDonation => seacreatureDonation !== action.payload);

        default:
            return state;
    }
};