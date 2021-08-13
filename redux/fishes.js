import * as ActionTypes from './ActionTypes';

export const fishes = (state = { isLoading: true,
                                     errMess: null,
                                     fishes: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FISHES:
            return {...state, isLoading: false, errMess: null, fishes: action.payload};

        case ActionTypes.FISHES_LOADING:
            return {...state, isLoading: true, errMess: null, fishes: []}

        case ActionTypes.FISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};