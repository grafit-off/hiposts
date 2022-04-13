import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/0UI/Loader/Loader';
import { AuthContext } from './context/context';
import { privateRoutes, publicRoutes } from './router/routes';

const AppRoutes = (props) => {
	const { authInfo, isLoading } = useContext(AuthContext);

	if (isLoading) return (<Loader />)

	return (
		<Routes>
			{authInfo.isAuth
				? privateRoutes.map(route => <Route path={route.path} element={route.component} key={route.path} />)
				: publicRoutes.map(route => <Route path={route.path} element={route.component} key={route.path} />)
			}
		</Routes>
	)
}


export default AppRoutes;
