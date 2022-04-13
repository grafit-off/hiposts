import React from 'react';
import { getPagesArr } from '../../../utils/pages';

import styles from './pagination.module.css';

import Button from '../Button/Button';

const Pagination = ({ totalPages, currentPage, changePage, ...props }) => {
	let pagesArr = getPagesArr(totalPages);

	return (
		<div className={styles.pagination + ' ' + props.className}>
			{pagesArr.map((page) => {
				return <Button
					key={'page=' + page}
					className={currentPage === page ? styles.pageActive : " "}
					disabled={currentPage === page ? true : false}
					onClick={() => { changePage(page) }}
				> {page}</Button>
			})}
		</div >
	)
}


export default Pagination;
