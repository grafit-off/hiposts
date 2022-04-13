import React from 'react';
import styles from './heading.module.css';

const Heading = (props) => {
	return (
		<h1 className={props.className + ' ' + styles.heading + ' text-reset'}>{props.children}</h1>
	)
}


export default Heading;
