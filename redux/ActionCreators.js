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

export const fetchArts = () => dispatch => {

    dispatch(artsLoading());

    return fetch(baseUrl + 'arts')
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
        .then(arts => dispatch(addArts(arts)))
        .catch(error => dispatch(artsFailed(error.message)));
};

export const artsLoading = () => ({
    type: ActionTypes.ARTS_LOADING
});

export const artsFailed = errMess => ({
    type: ActionTypes.ARTS_FAILED,
    payload: errMess
});

export const addArts = arts => ({
    type: ActionTypes.ADD_ARTS,
    payload: arts
});

export const fetchFossils = () => dispatch => {

    dispatch(fossilsLoading());

    return fetch(baseUrl + 'fossils')
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
        .then(fossils => dispatch(addFossils(fossils)))
        .catch(error => dispatch(fossilsFailed(error.message)));
};

export const fossilsLoading = () => ({
    type: ActionTypes.FOSSILS_LOADING
});

export const fossilsFailed = errMess => ({
    type: ActionTypes.FOSSILS_FAILED,
    payload: errMess
});

export const addFossils = fossils => ({
    type: ActionTypes.ADD_FOSSILS,
    payload: fossils
});


export const postBugDonation = bugId => dispatch => {
    setTimeout(() => {
        dispatch(addBugDonation(bugId));
    }, 1000);
};

export const addBugDonation = bugId => ({
    type: ActionTypes.ADD_BUG_DONATION,
    payload: bugId
});

export const deleteBugDonation = bugId => ({
    type: ActionTypes.DELETE_BUG_DONATION,
    payload: bugId
}); 

export const postFishDonation = fishId => dispatch => {
    setTimeout(() => {
        dispatch(addFishDonation(fishId));
    }, 1000);
};

export const addFishDonation = fishId => ({
    type: ActionTypes.ADD_FISH_DONATION,
    payload: fishId
});

export const deleteFishDonation = fishId => ({
    type: ActionTypes.DELETE_FISH_DONATION,
    payload: fishId
}); 

export const postSeaCreatureDonation = seacreatureId => dispatch => {
    setTimeout(() => {
        dispatch(addSeaCreatureDonation(seacreatureId));
    }, 1000);
};

export const addSeaCreatureDonation = seacreatureId => ({
    type: ActionTypes.ADD_SEACREATURE_DONATION,
    payload: seacreatureId
});

export const deleteSeaCreatureDonation = seacreatureId => ({
    type: ActionTypes.DELETE_SEACREATURE_DONATION,
    payload: seacreatureId
}); 

export const postArtDonation = artId => dispatch => {
    setTimeout(() => {
        dispatch(addArtDonation(artId));
    }, 1000);
};

export const addArtDonation = artId => ({
    type: ActionTypes.ADD_ART_DONATION,
    payload: artId
});

export const deleteArtDonation = artId => ({
    type: ActionTypes.DELETE_ART_DONATION,
    payload: artId
}); 

export const postFossilDonation = fossilId => dispatch => {
    setTimeout(() => {
        dispatch(addFossilDonation(fossilId));
    }, 1000);
};

export const addFossilDonation = fossilId => ({
    type: ActionTypes.ADD_FOSSIL_DONATION,
    payload: fossilId
});

export const deleteFossilDonation = fossilId => ({
    type: ActionTypes.DELETE_FOSSIL_DONATION,
    payload: fossilId
}); 




