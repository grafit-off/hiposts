import React from 'react';
import Heading from '../../components/0UI/Heading/Heading';
import Container from '../../components/Container/Container';
import styles from './notfound.module.css';


const NotFound = (props) => {

	return (
		<section>
			<Container>
				<div className={styles.notFound}>
					<Heading className={styles.title + '  text-reset '}>
						<span className={styles.number}>404</span>
						<span>Not Found</span>
					</Heading>
					<p className={styles.info + ' text-reset '}>The resource requested could not be found on this server! </p>
				</div>
			</Container>
		</section>

	)
}


export default NotFound;
