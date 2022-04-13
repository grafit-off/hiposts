import React from 'react';
import styles from './routeLink.module.css';
import { Link } from 'react-router-dom';

const RouteLink = ({ disabled, ...props }) => {
	return (
		<Link
			className={styles.link + ' link-reset ' + (disabled ? styles.disabled : '')}
			aria-disabled={disabled}
			{...props}>{props.children}</Link>
	)
}


export default RouteLink;
