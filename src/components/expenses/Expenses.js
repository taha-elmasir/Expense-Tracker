import { Fragment, useState } from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Chart from '../Chart/Chart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('');

  const filterHandler = (year) => setFilteredYear(year);
  const resetHandler = () => setFilteredYear('');

  const expenses =
    filteredYear === ''
      ? props.expenses
      : props.expenses.filter(
          (expense) => expense.date.getFullYear().toString() === filteredYear
        );

  const expensesData = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  if (filteredYear !== '') {
    for (const expense of expenses) {
      const month = expense.date.getMonth();
      expensesData[month].value += expense.amount;
    }
  }
  return (
    <Fragment>
      <ExpenseFilter onFilter={filterHandler} onReset={resetHandler} />
      <Chart expensesData={expensesData} />
      <table className='expenses'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              category={expense.category}
              date={expense.date}
            />
          ))}
        </tbody>
      </table>
      {expenses.length === 0 && <p className='error'>Found no expenses.</p>}
    </Fragment>
  );
};

export default Expenses;
