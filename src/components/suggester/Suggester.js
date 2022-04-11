import { useRef } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import styles from './Suggester.module.scss';


const Suggester = ({ suggestions, showDropdown, setShowDropdown, setSearchQuery, setEmptyQuery }) => {
    //ref for modal container
    const ref = useRef();

    //we using custom hook here
    useOnClickOutside(ref, () => setShowDropdown(false));

    console.log('ref', ref);

    return (
        <div>
        <ul ref={ref} className={styles.query_list} style={{ maxHeight: showDropdown ? '200px' : '0px'}}>
            {suggestions.map(query => (
                <li 
                    key={query}
                    className={styles.query_listItem}
                    onClick={(e) => {
                        console.log(e.target);
                        setShowDropdown(false);
                        setSearchQuery(query);
                        setEmptyQuery(false);
                    }}
                >
                    {query}
                </li>
            ))}
        </ul>
    </div>
    )

};

export default Suggester;
