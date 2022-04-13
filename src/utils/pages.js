export const getPagesCount = (totalCount, limit) => Math.ceil(totalCount / limit);

export const getPagesArr = (totalPages) => {
	// toCustomHook ?
	let arr = [];
	for (let i = 0; i < totalPages; i++) {
		arr.push(i + 1);
	}
	return arr;
}