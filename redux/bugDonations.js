import * as ActionTypes from './ActionTypes';

export const bugDonations = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_BUG_DONATION:
            if (state.includes(action.payload)) {
                return state;
            }
            return state.concat(action.payload);

            case ActionTypes.DELETE_BUG_DONATION:
                return state.filter(bugDonation => butDonation !== action.payload);

        default:
            return state;
    }
};