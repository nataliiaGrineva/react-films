import React, {useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoading, setPage, setTitle, setYear } from "../../store/actions";
import Suggester from "../suggester/Suggester";
import styles from './SearchBar.module.scss';


const SearchBar = () => {
    const dispatch = useDispatch();

    const { title, year } = useSelector(store => store);

    const [ searchQuery, setSearchQuery ] = useState(title);
    const [ searchYear, setSearchYear ] = useState(year);
    const [ emptyQuery, setEmptyQuery ] = useState(false);
    const [ queries, setQueries]  = useState([]);
    const [ years, setYears ] = useState([]);
    const [ showDropdown, setShowDropdown ] = useState(false);
    const [ showYearsDropdown, setYearsShowDropdown ] = useState(false);

    useEffect(() => {
        const localQueries = JSON.parse(localStorage.getItem('QUERIES'));
        if (localQueries) {
            setQueries(localQueries);
        };

        const localYears = JSON.parse(localStorage.getItem('YEARS'));
        if (localYears) {
            setYears(localYears);
        }
      }, []);
   

    const changeTitle = (e) => {
        setSearchQuery(e.target.value);
        setEmptyQuery(false);

        if (!showDropdown) {
            setShowDropdown(true);
        }

    };

    const changeYear = (e) => {
        setSearchYear(e.target.value);

        if (!showYearsDropdown) {
            setYearsShowDropdown(true);
        }
    };

    const searchFilms = async (e) => {
        e.preventDefault();
    
        if (searchQuery) {
            dispatch(setLoading(true));
            dispatch(setPage(1));

            dispatch(setTitle(searchQuery));
            dispatch(setYear(searchYear));

            if (!queries.includes(searchQuery)) {
                const newQueries = [...queries, searchQuery];
                setQueries(newQueries);
                localStorage.setItem('QUERIES', JSON.stringify(newQueries));
            }

            if (searchYear && !years.includes(searchYear)) {
                const newYears = [...years, searchYear];
                setYears(newYears);
                localStorage.setItem('YEARS', JSON.stringify(newYears));
            }
        } else {
            setEmptyQuery(true);
        };
    };

    const suggestions = queries.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
    if (showDropdown && suggestions.length === 1 && suggestions.includes(searchQuery)) {
        setShowDropdown(false);
    };

    

    return (
<div>
<form onSubmit={searchFilms} className={styles.form}>
            <div className={styles.title_message}>
                <label>
                    <span className={styles.text}>title:</span>
                    <input
                        type="text"
                        name="title"
                        value={searchQuery}
                        onChange={changeTitle}
                        onClick={() => setShowDropdown(!showDropdown)}
                        className={`${styles.input} ${emptyQuery&&styles.input__red}`}
                    />
                </label>
                <Suggester
                    suggestions={suggestions}
                    showDropdown={showDropdown}
                    setShowDropdown={setShowDropdown}
                    setSearchQuery={setSearchQuery}
                    setEmptyQuery={setEmptyQuery}
                />

                <div className={styles.alert}>
                {emptyQuery && <span>* TITLE is required</span>}
                </div>
            </div>
            <div className={styles.title_message}>
                <label>
                    <span className={styles.text}>year:</span>
                    <input
                        type="text"
                        name="year"
                        value={searchYear}
                        onChange={changeYear}
                        className={styles.input}
                    />
                </label>
            </div>
            <button type="submit" className={styles.btn}>search</button>
        </form>
</div>
    );
};

export default SearchBar;
