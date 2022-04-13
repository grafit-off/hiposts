import React, { useContext } from 'react';
import Heading from '../../components/0UI/Heading/Heading';
import Loader from '../../components/0UI/Loader/Loader';
import RouteLink from '../../components/0UI/RouteLink/RouteLink';
import Container from '../../components/Container/Container';
import { AuthContext } from '../../context/context';
import styles from './main.module.css';

const Main = (props) => {

	const { authInfo } = useContext(AuthContext);

	return (
		<section>
			<Container>
				{authInfo.isAuth
					? <>
						<Heading className={styles.heading}>Welcome back {authInfo.name}! You are authorized!</Heading>
						<p className={styles.text + ' text-reset'}>Now you can use all available functionality.</p>
					</>
					: <>
						<Heading className={styles.heading}>Welcome Guest!</Heading>
						<p className={styles.text + ' text-reset'}>
							To have full access you need to log in!
							Follow the link <RouteLink to='/login'>Login*</RouteLink>.
						</p>
						<small className={styles.small + ' text-reset'}>
							*Authorization is fake, confirmations
							not required. The data is stored in your localStorage!
						</small>
					</>
				}
			</Container>
		</section>
	)
}


export default Main;
