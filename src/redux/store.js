//import { reducerName } from './reducer'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState  = {
    arrPosts: [],
    arrNews: [],
    isLoading: false,
    error: false,
    offset: 0,
    limit: 12,
};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_FETCH':
            return { ...state, isLoading: true };
        case 'FETCH_NEW_SUCCESS':
            return { ...state, arrNews: [...state.arrNews, ...action.data], isLoading: false };
        case 'FETCH_ERR':
            return { ...state, error: true, isLoading: false };
        case 'FETCH_NEW':
            return { ...state, arrNews: [...state.arrPost, ...action.data] };
        default:
            return state;
    }
}
const store = createStore(myReducer, applyMiddleware(thunk));

export default store
