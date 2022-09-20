import { Fragment } from 'react';

import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 344,
    category: 'Travel',
    date: new Date(2022, 7, 12),
  },
  {
    id: 'e2',
    title: 'Car Insurance',
    amount: 200,
    category: 'Insurance',
    date: new Date(2021, 3, 5),
  },
  {
    id: 'e3',
    title: 'New TV',
    amount: 199.99,
    category: 'Devices',
    date: new Date(2020, 5, 1),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 98.49,
    category: 'Furniture',
    date: new Date(2018, 12, 8),
  },
];

const App = () => {
  return (
    <Fragment>
      <h1>&#36; Expense Tracker</h1>
      <NewExpense />
      <Expenses expenses={expenses} />
    </Fragment>
  );
};

export default App;
