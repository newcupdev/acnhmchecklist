import * as ActionTypes from './ActionTypes';

export const artDonations = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_ART_DONATION:
            if (state.includes(action.payload)) {
                return state;
            }
            return state.concat(action.payload);

            case ActionTypes.DELETE_ART_DONATION:
                return state.filter(artDonation => artDonation !== action.payload);

        default:
            return state;
    }
};