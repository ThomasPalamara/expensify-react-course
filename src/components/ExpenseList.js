import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = props => (
	<div>
		<h1>ExpenseList</h1>

		<table>
			<tbody>
				<tr>
					<th>Description</th>
					<th>Amount</th>
					<th>Created at</th>
				</tr>
				{props.expenses.map(expense => (
					<ExpenseListItem
						key={expense.id}
						{...expense}
					/>
				))}
			</tbody>
		</table>

	</div>
);

const mapStatetoProps = state => (
	{
		expenses: selectExpenses(state.expenses, state.filters),
	}
);

//	More common way to do is to export by default for the HOC and call the function as parameters
export default connect(mapStatetoProps)(ExpenseList);

// ===
// const ConnectedExpenseList = connect((state) => {
//     return{
//         expenses: state.expenses
//     }
// })(ExpenseList);
// export default ConnectedExpenseList;
