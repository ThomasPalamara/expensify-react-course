import moment from 'moment';


// Filter Reducer
const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: moment().startOf('month'),
	endDate: moment().endOf('month'),
};

// dont need a name for the function if we set a default export since it's the only export
export default (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
	case 'SET_TEXT_FILTER':
		return {
			...state,
			text: action.text,
		};
	case 'SORT_BY_AMOUNT':
		return {
			...state,
			sortBy: 'amount',
		};
	case 'SORT_BY_DATE':
		return {
			...state,
			sortBy: 'date',
		};
	case 'SET_START_DATE':
		return {
			...state,
			startDate: action.date,
		};
	case 'SET_END_DATE':
		return {
			...state,
			endDate: action.date,
		};
	default:
		return state;
	}
};
