import * as ActionTypes from './ActionTypes';

export const fossils = (state = { isLoading: true,
                                     errMess: null,
                                     fossils: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FOSSILS:
            return {...state, isLoading: false, errMess: null, fossils: action.payload};

        case ActionTypes.FOSSILS_LOADING:
            return {...state, isLoading: true, errMess: null, fossils: []}

        case ActionTypes.FOSSILS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};