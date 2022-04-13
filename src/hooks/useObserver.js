import { useEffect, useRef } from 'react';

export const useObserver = (ref, canLoad, isLoading, cb) => {
	let observer = useRef();

	useEffect(() => {
		if (isLoading) return;
		if (observer.current) observer.current.disconnect();

		const callback = (entries, observer) => {
			if (entries[0].isIntersecting && canLoad) {
				cb();
			}
		};

		observer.current = new IntersectionObserver(callback);
		observer.current.observe(ref.current);
	}, [isLoading]);
}