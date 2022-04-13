import React from 'react';
import MyLink from '../0UI/MyLink/MyLink';
import styles from './comment.module.css';

const Comment = ({ comment }) => {

	return (
		<li className={styles.item}>
			<article className={styles.comment}>
				<span className={styles.id}>ID:{comment.id}</span>
				<div className={styles.info}>
					<span className={styles.name}>
						{comment.name}
					</span>
					<address className={styles.email + ' text-reset'}>
						<MyLink href={'mailto:' + comment.email} target='_blank'>{comment.email}</MyLink>
					</address>
					<p className={styles.body + ' text-reset'}>
						{comment.body}
					</p>
				</div>
			</article>
		</li>
	)
}


export default Comment;
