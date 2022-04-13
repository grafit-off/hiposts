import { useState } from "react";

export const useFetching = (cb) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const fetching = async (...args) => {
		try {
			setIsLoading(true);
			await cb(...args);
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	}

	return [fetching, isLoading, error];
}