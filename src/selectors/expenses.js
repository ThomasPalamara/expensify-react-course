import moment from 'moment';
// Get visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses.filter((expense) => {
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
		const startDateMatch = startDate ? startDate.isSameOrBefore(moment(expense.createdAt), 'day') : true ;
		const endDateMatch = endDate ? endDate.isSameOrAfter(moment(expense.createdAt), 'day') : true ;

		return startDateMatch && endDateMatch && textMatch;
	}).sort((a, b) => {
		if (sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1;
		} else if (sortBy === 'amount') {
			return a.amount < b.amount ? 1 : -1;
		}
	});
};
