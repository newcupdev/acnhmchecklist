import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchBugs = () => dispatch => {

    dispatch(bugsLoading());

    return fetch(baseUrl + 'bugs')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(bugs => dispatch(addBugs(bugs)))
        .catch(error => dispatch(bugsFailed(error.message)));
};

export const bugsLoading = () => ({
    type: ActionTypes.BUGS_LOADING
});

export const bugsFailed = errMess => ({
    type: ActionTypes.BUGS_FAILED,
    payload: errMess
});

export const addBugs = bugs => ({
    type: ActionTypes.ADD_BUGS,
    payload: bugs
});

export const fetchFishes = () => dispatch => {

    dispatch(fishesLoading());

    return fetch(baseUrl + 'fishes')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(fishes => dispatch(addFishes(fishes)))
        .catch(error => dispatch(fishesFailed(error.message)));
};

export const fishesLoading = () => ({
    type: ActionTypes.FISHES_LOADING
});

export const fishesFailed = errMess => ({
    type: ActionTypes.FISHES_FAILED,
    payload: errMess
});

export const addFishes = fishes => ({
    type: ActionTypes.ADD_FISHES,
    payload: fishes
});

export const fetchSeacreatures = () => dispatch => {

    dispatch(seacreaturesLoading());

    return fetch(baseUrl + 'seacreatures')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(seacreatures => dispatch(addSeacreatures(seacreatures)))
        .catch(error => dispatch(seacreaturesFailed(error.message)));
};

export const seacreaturesLoading = () => ({
    type: ActionTypes.SEACREATURES_LOADING
});

export const seacreaturesFailed = errMess => ({
    type: ActionTypes.SEACREATURES_FAILED,
    payload: errMess
});

export const addSeacreatures = seacreatures => ({
    type: ActionTypes.ADD_SEACREATURES,
    payload: seacreatures
});






