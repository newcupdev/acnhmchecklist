import * as ActionTypes from './ActionTypes';

export const arts = (state = { isLoading: true,
                                     errMess: null,
                                     arts: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ARTS:
            return {...state, isLoading: false, errMess: null, arts: action.payload};

        case ActionTypes.ARTS_LOADING:
            return {...state, isLoading: true, errMess: null, arts: []}

        case ActionTypes.ARTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};