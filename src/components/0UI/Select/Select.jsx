import React from 'react';
import styles from './select.module.css';

const Select = ({ options, defOption, value, onChange, ...props }) => {
	const onSelect = (e) => {
		onChange(e.target.value);
	};

	return (
		<select
			{...props}
			value={value}
			onChange={onSelect}
			className={styles.select}
		>
			<option disabled value="">
				{defOption}
			</option>
			{options.map((o) => (
				<option key={o.value} value={o.value}>
					{o.name}
				</option>
			))}
		</select>
	);
};

export default Select;
