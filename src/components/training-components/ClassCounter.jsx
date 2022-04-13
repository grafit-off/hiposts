import React from 'react';

class ClassCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};

		// Так как метод вызываем не мы то контекст теряется
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	increment() {
		this.setState({ count: this.state.count + 1 });
	}

	decrement() {
		this.setState({ count: this.state.count - 1 });
	}

	render() {
		return (
			<div>
				<h1>React Counter</h1>
				<button onClick={this.increment}>Increment</button>
				<span>{this.state.count}</span>
				<button onClick={this.decrement}>Decrement</button>
			</div>
		);
	}
}

export default ClassCounter;
