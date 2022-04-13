import React from 'react';
import styles from './modal.module.css';

const Modal = ({ children, visible, setVisible }) => {

	return (
		<div className={styles.modal + ' ' + (visible ? styles.active : '')} onClick={() => { setVisible(false) }}>
			<div className={styles.container} onClick={(e) => { e.stopPropagation() }}>
				{children}
			</div>
		</div>
	)
}


export default Modal;
