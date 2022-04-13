import React from 'react';
import styles from './loader.module.css';

const Loader = (props) => {

	return (
		<div className={styles.loader + ' ' + props.className}>
			<div className={styles.bigCircle}>
				<div className={styles.smallCircle}></div>
			</div>
		</div>
	)
}


export default Loader;
