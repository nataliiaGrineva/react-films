import React from "react";
import Film from "../Film/Film";
import styles from './FilmsList.module.scss';

const FilmsList = ({ films }) => {
    return (
        <ul className={styles.film_container}>
            { films.map(film => (
                <li key={film.imdbID} className={styles.list_item}>
                    <Film film={film}/>
                </li>
            ))}
        </ul>
    );
};

export default FilmsList;
