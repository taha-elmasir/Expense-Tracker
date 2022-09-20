import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => (
  <table className='expense'>
    <thead>
      <tr>
        <th>Name</th>
        <th>Amount</th>
        <th>Category</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          name={expense.title}
          amount={expense.amount}
          category={expense.category}
          date={expense.date}
        />
      ))}
    </tbody>
  </table>
);

export default Expenses;
