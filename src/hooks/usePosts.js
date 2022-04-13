import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
	// Кеширует данные в коллбеке и обновляет их
	// при изменении елементов в массиве зависимостей
	// Здесь лежит массив
	const sortedPosts = useMemo(() => {
		if (sort) {
			return [...posts].sort((a, b) =>
				a[sort].localeCompare(b[sort])
			);
		}
		return posts;
	}, [sort, posts]);

	return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
	const sortedPosts = useSortedPosts(posts, sort);

	const searchedAndSortedPosts = useMemo(() => {
		return sortedPosts.filter((p) =>
			p.title.toLowerCase().includes(query.toLowerCase())
		);
	}, [query, sortedPosts]);

	return searchedAndSortedPosts;
}