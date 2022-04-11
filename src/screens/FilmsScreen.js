import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../components/alert/Alert";
import FilmsList from "../components/FilmsList/FilmsList";
import Loader from "../components/loader/Loader";
import Pagination from "../components/pagination/Pagination";
import SearchBar from "../components/searchBar/SearchBar";
import { loadFilmsByTitle } from "../store/actions";
import styles from './FilmsScreen.module.scss';


const FilmsScreen = () => {
    const { films, alert, page, title, year, isLoading, total } = useSelector(state => state);
    const dispatch = useDispatch();

  useEffect(() => {
    if (title) {
      console.log('Films useEffect ...');
              dispatch(loadFilmsByTitle(title, year, page));
    };
  return (() => {
    console.log('UNMOUNT');
  })
  }, [year, title, page, dispatch]);

console.log('title', title);
    return (
      <div className={styles.content_container}>
        {isLoading && <Loader />}
        <SearchBar /> 
        {!alert && films?.length > 0 && <FilmsList films={films} />}
        {alert && <Alert alert={alert} />}
        {total > 10 && films && <Pagination />}
      </div>
    )
};

export default FilmsScreen;
