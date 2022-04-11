import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Alert from "../components/alert/Alert";
import  Loader  from "../components/loader/Loader";
import { getFilm } from "../store/actions";
import styles from './FilmScreen.module.scss';

const FilmScreen = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const { film, alert, isLoading } = useSelector(state => state);
    const currentId = useSelector(store => store.film?.imdbID);

    useEffect(() => {
        dispatch(getFilm(id));
    }, [id]);

    
    console.log('id:',id, 'currentId:', currentId);

    return (
        <>
        {isLoading && <Loader />}
        {alert && <Alert alert={alert} />}
        {film && (id === currentId) && <div>
            <h2 className={styles.heading}>{film.Title}</h2>
                    <div className={styles.container}>
                        <div className={styles.pict_container}>
                        {(film.Poster !== 'N/A') ? <img src={film.Poster} alt={film.Title} className={styles.pict} />
                            : <span className={styles.no_pict_msg}>no poster</span>}
                        </div>
                        <table className={styles.table}>
                            <tbody>
                            <tr>
                                <td className={styles.td}>Description</td>
                                <td className={styles.td}>{film.Plot}</td>
                            </tr>
                            <tr>
                                <td className={styles.td}>Year</td>
                                <td className={styles.td}>{film.Year}</td>
                            </tr>
                            <tr>
                                <td className={styles.td}>Genre</td>
                                <td className={styles.td}>{film.Genre}</td>
                            </tr>
                            <tr>
                                <td className={styles.td}>Director</td>
                                <td className={styles.td}>{film.Director}</td>
                            </tr>
                            <tr>
                                <td className={styles.td}>Actors</td>
                                <td className={styles.td}>{film.Actors}</td>
                            </tr>
                            <tr>
                                <td className={styles.td}>Language</td>
                                <td className={styles.td}>{film.Language}</td>
                            </tr>
                            <tr>
                                <td className={styles.td}>Awards</td>
                                <td className={styles.td}>{film.Awards}</td>
                            </tr>

                            <tr>
                                <td className={styles.td}>imdbRating</td>
                                <td className={styles.td}>{film.imdbRating}</td>
                            </tr>
                            <tr>
                                <td className={styles.td}>Type</td>
                                <td className={styles.td}>{film.Type}</td>
                            </tr>
                            <tr>
                                <td className={styles.td}>imdbID</td>
                                <td className={styles.td}>{film.imdbID}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>}
        </>
    )
};

export default FilmScreen;
