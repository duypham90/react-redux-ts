import getListNew from '../api/getPost';

export function StartFetch() {
    return { type: 'START_FETCH' };
}

export function fetchNewSuccess(data) {
    return { type: 'FETCH_NEW_SUCCESS', data }
}

export function FetchErr() {
    return { type: 'FETCH_ERR' };
}

export function getNew(offset, limit){
    return dispatch => {
        dispatch(StartFetch());
            getListNew(offset, limit)
            .then(res =>
                setTimeout(() => {
                    dispatch(fetchNewSuccess(res))
                }, 5000))
            .catch(() => dispatch(FetchErr()));  
    };
}