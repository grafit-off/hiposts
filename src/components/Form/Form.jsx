import React, { useState } from 'react';
import Input from '../0UI/Input/Input';
import Button from '../0UI/Button/Button';
import styles from './form.module.css';

const Form = (props) => {
	const [post, setPost] = useState({
		title: '',
		body: ''
	});


	const onTitleInput = (e) => setPost({ ...post, title: e.target.value });
	const onDescrInput = (e) => setPost({ ...post, body: e.target.value });

	const addNewPost = (e) => {
		e.preventDefault();
		props.createPost({ ...post, id: Date.now() });
		setPost({ title: '', body: '' });
	};

	return (
		<form className={styles.form}>
			<fieldset className={styles.fieldset + ' text-reset'}>
				<legend className={styles.legend + ' text-reset'}>
					Enter post info
				</legend>
				<Input
					className={styles.input}
					onChange={onTitleInput}
					value={post.title}
					required
					placeholder="Enter your title"
					name="title"
				/>
				{
					/* 
					 Компонент является неконтролируемым если использовать Реф
					 Так как ссылается на реальное дом дерево
					*/
				}
				<Input
					className={styles.input}
					onChange={onDescrInput}
					value={post.body}
					required
					placeholder="Enter your description"
					name="description"
				/>
			</fieldset>
			<Button onClick={addNewPost} type="button">Create</Button>
		</form>
	);
};

export default Form;
