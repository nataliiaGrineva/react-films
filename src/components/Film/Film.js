import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './Film.module.scss';

const Film = ({ film }) => {
    let navigate = useNavigate();

    return (
        <div onClick={() => navigate(`${film.imdbID}`)}>
            <div className={styles.pict_container}>
                {(film.Poster !== 'N/A') ? <img src={film.Poster} alt={film.Title} className={styles.pict} />
                : <span className={styles.no_pict_msg}>no poster</span>}
            </div>
            <div className={styles.title}>{film.Title}</div>
        </div>
    );
};

export default Film;
