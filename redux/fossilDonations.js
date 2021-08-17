import * as ActionTypes from './ActionTypes';

export const fossilDonations = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_FOSSIL_DONATION:
            if (state.includes(action.payload)) {
                return state;
            }
            return state.concat(action.payload);

            case ActionTypes.DELETE_FOSSIL_DONATION:
                return state.filter(fossilDonation => fossilDonation !== action.payload);

        default:
            return state;
    }
};