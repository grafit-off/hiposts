import React from 'react';
import styles from './myLink.module.css';

const MyLink = (props) => {

	return (
		<a {...props} className={styles.link + ' link-reset'}>{props.children}</a>
	)
}


export default MyLink;
