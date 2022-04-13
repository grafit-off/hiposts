import React, { useContext } from 'react';
import { AuthContext } from '../../context/context';
import Button from '../0UI/Button/Button';
import RouteLink from '../0UI/RouteLink/RouteLink';
import Container from '../Container/Container';
import styles from './header.module.css';

const Header = (props) => {

	const { authInfo, setAuthInfo } = useContext(AuthContext);

	const onLogout = () => {
		setAuthInfo({ name: 'Guest', isAuth: false });
		localStorage.removeItem('isAuth');
		localStorage.removeItem('authUserName');
	}

	return (
		<header className={styles.header}>
			<Container>
				<nav>
					<ul className={styles.navList + ' list-reset '}>
						<li className={styles.navItem}>
							<RouteLink to='/'>Main</RouteLink>
						</li>
						<li className={styles.navItem}>
							<RouteLink to='/posts'>Posts</RouteLink>
						</li>
						<li className={styles.navItem}>
							<RouteLink to='/about'>About</RouteLink>
						</li>
						{!authInfo.isAuth ?
							(<li className={styles.navItem}>
								<RouteLink to='/login'>Login</RouteLink>
							</li>)
							: (<li className={styles.navItem}>
								<Button type='button' onClick={onLogout}>Logout</Button>
							</li>)
						}
					</ul>
				</nav>
			</Container>
		</header>
	)
}


export default Header;
