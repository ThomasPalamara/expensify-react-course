import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => ( // destucturing
	<tr>
		<th><Link to={`/edit/${id}`}>{description}</Link></th>
		<th>{amount}</th>
		<th>{createdAt}</th>
	</tr>
);

// My solution, without desctucturing
// const ExpenseListItem = ({props}) => (
//                 <tr>
//                     <th>{props.description}</th>
//                     <th>{props.amount}</th>
//                     <th>{props.createdAt}</th>
//                 </tr>
// )

export default ExpenseListItem;
