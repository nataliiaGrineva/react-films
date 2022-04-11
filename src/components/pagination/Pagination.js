import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import { setPage } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

const Pagination = () => {
    const dispatch = useDispatch();

    const { total, page } = useSelector(store => store);

    const pageCount = Math.ceil(total / 10);

    const handlePageClick = (e) => {
        const page = e.selected + 1;
        
        dispatch(setPage(page));
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    };

    return (
        <ReactPaginate
        forcePage={page - 1}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        breakClassName={styles.list_item}
        breakLinkClassName={styles.list_item__link}
        containerClassName={styles.list}
        pageClassName={styles.list_item}
        pageLinkClassName={styles.list_item__link}
        activeClassName={styles.list_item__active}
        activeLinkClassName={styles.list_item__active_link}
        previousClassName={styles.list_item}
        nextClassName={styles.list_item}
        previousLinkClassName={styles.list_item__link}
        nextLinkClassName={styles.list_item__link}
        disabledClassName={styles.list_item__disabled}
        disabledLinkClassName={styles.list_item__disabled_link}
        renderOnZeroPageCount={null}
      />
    )

};

export default Pagination;
