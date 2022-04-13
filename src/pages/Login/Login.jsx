import React, { useContext, useState } from 'react';
import Button from '../../components/0UI/Button/Button';
import Heading from '../../components/0UI/Heading/Heading';
import Input from '../../components/0UI/Input/Input';
import Container from '../../components/Container/Container';
import { AuthContext } from '../../context/context';
import styles from './login.module.css';

const Login = (props) => {
	const [loginInfo, setLoginInfo] = useState({ name: '', email: '', pass: '', err: '' });

	const { authInfo, setAuthInfo } = useContext(AuthContext);

	const login = (e) => {
		e.preventDefault();
		if (loginInfo.name && loginInfo.email && loginInfo.pass) {
			localStorage.setItem('isAuth', 'true');
			localStorage.setItem('authUserName', loginInfo.name);
			setAuthInfo({ name: loginInfo.name, isAuth: true });
			setLoginInfo({ ...loginInfo, err: '' });
		} else {
			setLoginInfo({ ...loginInfo, err: 'Fields must not be empty!' });
		}
	}

	const onNameInput = (e) => {
		e.preventDefault();
		setLoginInfo({ ...loginInfo, name: e.target.value });
	}

	const onEmailInput = (e) => {
		e.preventDefault();
		setLoginInfo({ ...loginInfo, email: e.target.value })
	}

	const onPassInput = (e) => {
		e.preventDefault();
		setLoginInfo({ ...loginInfo, pass: e.target.value })
	}

	return (
		<section className={styles.section}>
			<Container>
				<Heading>Authorization</Heading>
				<p className={styles.text + ' text-reset'}>Authorization is completely fake, confirmations
					not required. The data is stored in your localStorage!</p>
				<form onSubmit={login}>
					<Input placeholder='Your name...' type='text' autoComplete='off' onChange={onNameInput} value={loginInfo.name} className={styles.input} />
					<Input placeholder='Email...' type='email' autoComplete='off' onChange={onEmailInput} value={loginInfo.email} className={styles.input} />
					<Input placeholder='Password...' type='password' autoComplete='off' onChange={onPassInput} value={loginInfo.pass} className={styles.input} />
					{loginInfo.err ? <p className={styles.error + ' text-reset'}>{loginInfo.err}</p> : ''}
					<Button type='submit' >Login</Button>
				</form>
			</Container>
		</section>
	)
}


export default Login;
