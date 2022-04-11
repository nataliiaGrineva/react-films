import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { SET_LOADING, SET_TITLE, SET_YEAR } from './types';
import { SET_FILMS } from './types';
import { SET_ERROR } from './types';
import { SET_PAGE } from './types';
import { SET_FILM } from './types';

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
  }

const initialState = { 
    films: [],
    total: 0,
    page: 1,
    isLoading: false,
    isLoadingError: false,
    alert: '',
    film: null,
    title: '',
    year: '',
 };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {...state, isLoading: action.payload };
        case SET_FILMS:
            return {
                ...state, 
                films: action.payload.data, 
                total: action.payload.total,
                isLoadingError: false,
                alert: '',
            };
        case SET_ERROR:
            return {...state, isLoadingError: true, alert: action.payload };
        case SET_PAGE:
            return {...state, page: action.payload };
        case SET_FILM:
            return {...state, film: action.payload, isLoadingError: false, alert: '' };
        case SET_TITLE:{

            return {...state, title: action.payload};
        }
        case SET_YEAR:
            return {...state, year: action.payload};
        default:
            return { ...state };
    }
};

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;
