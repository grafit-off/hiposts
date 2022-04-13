import React from 'react';
import styles from './input.module.css';

const Input = (props) => {
	return (
		<input
			{...props}
			className={props.className + ' ' + styles.input + ' input-reset'}
		/>
	);
};

export default Input;
