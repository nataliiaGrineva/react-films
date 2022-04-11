import axios from "axios";

// const key='c9a2785d';
const key='31047ceb';
const URL = 'https://www.omdbapi.com/';

export const getDataBySearch = async (title, year, page) => {
    try {
        const dataBySearch = await axios.get(`${URL}?apikey=${key}&s=${title}&y=${year}&page=${page}`);
        if (dataBySearch.data.Error) {
            throw new Error(dataBySearch.data.Error)
        };

        const filmsBySearch = dataBySearch.data.Search;
        const totalResults = dataBySearch.data.totalResults;

        console.log('filmsBySearch',filmsBySearch);

        return {data: filmsBySearch, total: totalResults};
    } catch (error) {
        console.log(error);
        throw error;
    };
};

export const getDataById = async (id) => {
    try {
        const filmsById = await axios.get(`${URL}?apikey=${key}&i=${id}`);
        return filmsById;
    } catch (error) {
        console.warn(error);
    };
};
