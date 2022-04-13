import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './assets/css/normilize.css';
import './assets/css/reset.css';
import './assets/css/app.css';

import Header from './components/Header/Header';
import AppRoutes from './AppRoutes';
import { AuthContext } from './context/context';
import Footer from './components/Footer/Footer';

export default () => {
	const [authInfo, setAuthInfo] = useState({ name: 'Guest', isAuth: false });
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (localStorage.getItem('isAuth') && localStorage.getItem('authUserName')) {
			setAuthInfo({ name: localStorage.getItem('authUserName'), isAuth: localStorage.getItem('isAuth') })
		};
		setIsLoading(false);

		return () => {
			console.log('unmount')
		};
	}, []);

	return (
		<AuthContext.Provider value={{ authInfo, setAuthInfo, isLoading }} >
			<BrowserRouter>
				<Header />
				<AppRoutes />
				<Footer />
			</BrowserRouter>
		</AuthContext.Provider >

	);
}
