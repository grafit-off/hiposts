import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './post.module.css';


import Button from '../0UI/Button/Button';

const Post = (props) => {
	const router = useNavigate();

	return (
		<li className={styles.item}>
			<article className={styles.post}>
				<h2 className={styles.heading + ' text-reset'}>{props.post.id + '. ' + props.post.title}</h2>
				<p className={styles.text + ' text-reset'}> {props.post.body}</p>
				<div className={styles.buttons}>
					<Button
						onClick={() => {
							router(`/posts/${props.post.id}`)
						}}
					>
						Open
					</Button>
					<Button
						onClick={() => {
							props.deletePost(props.post);
						}}
					>
						Remove
					</Button>
				</div>
			</article>
		</li>
	);
};

export default Post;
