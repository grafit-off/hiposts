import React from 'react';
import Post from './../Post/Post';
import styles from './postList.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Heading from '../0UI/Heading/Heading';

const PostList = (props) => {

	if (!props.posts.length) {
		return <p className={styles.empty + ' text-reset'}>Empty!</p>;
	}
	return (
		<div className={props.className + ' '}>
			<Heading className={styles.heading}>POSTS</Heading>
			<ul className={styles.list + ' list-reset'}>
				<TransitionGroup>
					{
						props.posts.map((el) => (
							// Для key не стоит использовать index массива, 
							// т. к. при удалении елемента индексы смещаются,
							//  а ключи должны оставаться уникальными
							// (random, Date.now тоже не стоит)
							<CSSTransition
								key={el.id}
								timeout={500}
								classNames={{
									enter: styles.postEnter,
									enterActive: styles.postEnterActive,
									exit: styles.postExit,
									exitActive: styles.postExitActive,
								}}
							>
								< Post deletePost={props.deletePost} post={el} key={el.id} />
							</CSSTransition>

						))
					}
				</TransitionGroup>
			</ul>
		</div>
	);
};

export default PostList;
