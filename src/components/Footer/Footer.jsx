import React from 'react';
import Container from '../Container/Container';
import styles from './footer.module.css';

const Footer = (props) => {

	return (
		<footer className={styles.footer}>
			<Container>
				<small className={styles.small + ' text-reset'}>
					Coded and maintained with ❤️  © 2021
				</small>
			</Container>

		</footer>
	)
}


export default Footer;
