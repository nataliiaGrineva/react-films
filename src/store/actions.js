import { SET_LOADING } from './types';
import { SET_FILMS } from './types';
import { SET_ERROR } from './types';
import { SET_PAGE } from './types';
import { SET_FILM } from './types';
import { SET_TITLE } from './types';
import { SET_YEAR } from './types';
import { getDataBySearch } from '../api';
import axios from 'axios';

export const setLoading = (loading) => ({ type: SET_LOADING, payload: loading });
export const setFilms = (res) => ({ type: SET_FILMS, payload: res });
export const setError = (alert) => ({ type: SET_ERROR, payload: alert });
export const setPage = (page) => ({type: SET_PAGE, payload: page});
export const setFilm = (film) => ({type: SET_FILM, payload: film});


export const setTitle = (title) => ({type: SET_TITLE, payload: title});
export const setYear = (year) => ({type: SET_YEAR, payload: year});


export const getFilm = (id) => async (dispatch) => {
    dispatch(setLoading(true));

    try {
        const res = await axios.get(`https://www.omdbapi.com/?apikey=c9a2785d&i=${id}`);
        if (res.data.Error) {
            throw new Error(res.data.Error);
        };
        const film = res.data;
        console.log('film',film);
        dispatch(setFilm(film));

    } catch (error) {
        console.log('last err',error);
        dispatch(setError(error.message));
    }
    finally {
        dispatch(setLoading(false));
    }
};

export const loadFilmsByTitle = (title, year, page) => async (dispatch) => {
    dispatch(setLoading(true));

    try {
        const res = await getDataBySearch(title, year, page);
        dispatch(setFilms(res));
    } catch (error) {
        console.log('last err',error);
        dispatch(setError(error.message));
    }
    finally {
        dispatch(setLoading(false));
    }
};
