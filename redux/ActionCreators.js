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






