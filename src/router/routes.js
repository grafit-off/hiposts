import About from "../pages/About/About";
import NotFound from "../pages/NotFound/NotFound";
import Post from "../pages/Post/Post";
import Posts from "../pages/Posts/Posts";
import Login from "../pages/Login/Login";
import { Navigate } from "react-router-dom";
import Main from "../pages/Main/Main";

export const privateRoutes = [
	{ path: '', component: <Main /> },
	{ path: 'about', component: <About /> },
	{ path: 'posts', component: <Posts /> },
	{ path: 'posts/:id', component: <Post /> },
	{ path: 'login', component: <Navigate to='/' /> },
	{ path: '*', component: <NotFound /> },
]

export const publicRoutes = [
	{ path: '', component: <Main /> },
	{ path: 'about', component: <About /> },
	{ path: '*', component: <Navigate to='login' /> },
	{ path: 'login', component: <Login /> },
]