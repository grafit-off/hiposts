import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../API/api';

import styles from './post.module.css';

import Container from '../../components/Container/Container';
import Loader from '../../components/0UI/Loader/Loader';
import Comments from '../../components/Comments/Comments';
import RouteLink from '../../components/0UI/RouteLink/RouteLink';
import Heading from '../../components/0UI/Heading/Heading';

const Post = (props) => {
	const params = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);

	const [fetchPost, isPostLoading, postError] = useFetching(async (id) => {
		const response = await PostService.getPostById(id);;
		setPost(response.data);
	});

	const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
		const response = await PostService.getCommentsByPostId(id);;
		setComments(response.data);
	});

	useEffect(() => {
		fetchPost(params.id);
		fetchComments(params.id);
		return () => {
			console.log('Unmount')
		};
	}, [params.id]);


	return (
		<section>
			<Container>
				{postError && <Navigate to='error' />}
				{isPostLoading
					? <Loader />
					: <>
						<article className={styles.post}>
							<Heading className={styles.heading}>{params.id + '. ' + post.title}</Heading>
							<p className={styles.text + ' text-reset'}> {post.body}</p>
							<div className={styles.buttons}>
								<RouteLink to={`/posts/${Number(params.id) - 1}`} tabIndex={parseInt(params.id) === 1 ? -1 : 0} disabled={parseInt(params.id) === 1 ? true : false}>Prev</RouteLink>
								<RouteLink to={`/posts/${Number(params.id) + 1}`} tabIndex={parseInt(params.id) === 100 ? -1 : 0} disabled={parseInt(params.id) === 100 ? true : false}>Next</RouteLink>
							</div>
						</article>
						{commentsError && <p>{commentsError}</p>}
						{isCommentsLoading
							? <Loader />
							: <Comments comments={comments} />
						}

					</>}
			</Container>
		</section>
	)
}


export default Post;
