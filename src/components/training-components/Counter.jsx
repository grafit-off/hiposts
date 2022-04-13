import React, { useState } from 'react';

const Counter = (props) => {
	// Хуки можно использовать только в верхнем уровне вложености
	// Их нельзя влаживать в услови, циклы и т.д.
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<h2>React Counter</h2>
			<button onClick={increment}>Increment</button>
			<span>{count}</span>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
};

export default Counter;
