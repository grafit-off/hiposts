import React from 'react';

import styles from './comments.module.css';

import Comment from '../Comment/Comment';

const Comments = ({ comments }) => {
	return (
		<div className={styles.comments}>
			<h2 className={styles.heading + ' text-reset'}>Comments</h2>
			<ul className={' list-reset'}>
				{comments.map(comment => <Comment key={comment.id} comment={comment} />)}
			</ul>
		</div>
	)
}


export default Comments;
