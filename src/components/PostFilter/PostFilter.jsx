import React from 'react';
import Select from '../0UI/Select/Select';
import Input from '../0UI/Input/Input';
import styles from './postFilter.module.css';

const PostFilter = ({ filter, setFilter, limit, setLimit }) => {
	return (
		<>
			<Input
				className={styles.input}
				value={filter.query}
				placeholder="Search..."
				onChange={(e) => {
					setFilter({ ...filter, query: e.target.value });
				}}
			/>
			<div className={styles.selects}>
				<label className={styles.label}>
					<span className={styles.labelName}>Sort by</span>
					<Select
						value={filter.sort}
						defOption="Selection"
						options={[
							{ name: 'Name', value: 'title' },
							{ name: 'Description', value: 'body' }
						]}
						onChange={(selectedSort) => {
							setFilter({ ...filter, sort: selectedSort });
						}}
					/>

				</label>
				<label className={styles.label}>
					<span className={styles.labelName}>Set load limit </span>
					<Select
						value={limit}
						defOption="Limit"
						options={[
							{ name: '5', value: '5' },
							{ name: '10', value: '10' },
							{ name: '25', value: '25' },
							{ name: 'All', value: '-1' },
						]}
						onChange={(selectedLimit) => {
							setLimit(selectedLimit);
						}}
					/>
				</label>
			</div>
		</>
	);
};

export default PostFilter;
