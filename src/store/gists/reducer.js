import { API_URL_GIST, API_URL_PUBLIC, STATUSES } from "./constans";
import { GET_GISTS_REQUEST, GET_GISTS_SUCCESS, GET_GISTS_FAILURE, getGistsRequest, getGistsSuccess, getGistsFailure } from "./actions";


const initialState = {
    gists: [],
    request: STATUSES.IDLE,
    error: null,
};


export const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GISTS_REQUEST:
            return {
                ...state,
                request: STATUSES.REQUEST,
            };
        case GET_GISTS_SUCCESS:
            return {
                ...state,
                articles: action.payload,
                request: STATUSES.SUCCESS,
            };
        case GET_GISTS_FAILURE:
            return {
                ...state,
                request: STATUSES.FAILURE,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const getAllGists = () => async (dispatch) => {
    dispatch(getGistsRequest());

    try {
        const res = await fetch(API_URL_PUBLIC);

        if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
        }

        const result = await res.json();

        dispatch(getGistsSuccess(result));

    } catch (err) {
        dispatch(getGistsFailure(err.message));
    }
};

export const selectGists = (state) => state.gists.gists;
export const selectGistsError = (state) => state.gists.error;
export const selectGistsLoading = (state) => state.gists.loading;