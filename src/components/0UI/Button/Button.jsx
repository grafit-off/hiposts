import React from 'react';
import styles from './button.module.css';

const Button = ({ children, ...props }) => {
	return (
		<button {...props} className={styles.btn + ' btn-reset ' + props.className}>
			{children}
		</button>
	);
};

export default Button;
