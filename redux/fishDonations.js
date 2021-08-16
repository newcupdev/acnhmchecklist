import * as ActionTypes from './ActionTypes';

export const fishDonations = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_FISH_DONATION:
            if (state.includes(action.payload)) {
                return state;
            }
            return state.concat(action.payload);

            case ActionTypes.DELETE_FISH_DONATION:
                return state.filter(fishDonation => fishDonation !== action.payload);

        default:
            return state;
    }
};