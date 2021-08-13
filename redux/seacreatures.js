import * as ActionTypes from './ActionTypes';

export const seacreatures = (state = { isLoading: true,
                                     errMess: null,
                                     seacreatures: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SEACREATURES:
            return {...state, isLoading: false, errMess: null, seacreatures: action.payload};

        case ActionTypes.SEACREATURES_LOADING:
            return {...state, isLoading: true, errMess: null, seacreatures: []}

        case ActionTypes.SEACREATURES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};