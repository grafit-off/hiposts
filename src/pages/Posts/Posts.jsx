import React, { useState, useEffect, useRef } from 'react';
import PostService from '../../API/api';
import { usePosts } from '../../hooks/usePosts';
import { useFetching } from '../../hooks/useFetching';
import { getPagesCount } from '../../utils/pages';

import styles from './posts.module.css';

import PostList from '../../components/PostList/PostList';
import PostFilter from '../../components/PostFilter/PostFilter';
import Modal from '../../components/0UI/Modal/Modal';
import Button from '../../components/0UI/Button/Button';
import Form from '../../components/Form/Form';
import Loader from '../../components/0UI/Loader/Loader';
import Pagination from '../../components/0UI/Pagination/Pagination';
import Container from '../../components/Container/Container';
import { useObserver } from '../../hooks/useObserver';

export default function Posts() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query);
	const lastElement = useRef();

	const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
		const response = await PostService.getAll(limit, page);
		setPosts([...posts, ...response.data]);
		const totalCount = response.headers['x-total-count'];
		setTotalPages(getPagesCount(totalCount, limit));
	});

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setIsModalOpen(false);
	};

	const deletePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	const changePage = (page) => {
		setPage(page);
	}

	useObserver(lastElement, (page < totalPages), isPostLoading, () => {
		setPage(page + 1);
	})

	useEffect(() => {
		fetchPosts(limit, page);
	}, [page, limit]);

	return (
		<section>
			<Container>
				<Button className={styles.createBtn} onClick={() => { setIsModalOpen(true) }} type="button">Create post</Button>
				<PostFilter filter={filter} setFilter={setFilter} limit={limit} setLimit={setLimit} />
				<PostList
					className={styles.posts}
					posts={searchedAndSortedPosts}
					deletePost={deletePost}
					selectedSort={filter.sort}
				/>
				<div ref={lastElement} aria-hidden='true' className={styles.lastElement}></div>
				{isPostLoading && <Loader />}
				{postError && <p className={styles.error + ' text-reset'}>{postError}</p>}
				{/* <Pagination totalPages={totalPages} currentPage={page} changePage={changePage} /> */}
				<Modal visible={isModalOpen} setVisible={setIsModalOpen}>
					<Form createPost={createPost} />
				</Modal>
			</Container>
		</section>
	);
}
