import { Fragment, useState } from 'react';

import Expenses from './components/expenses/Expenses';
import NewExpense from './components/expenses/NewExpense';

const expensesData = [
  {
    id: 'e1',
    title: 'Car Fuel',
    amount: 344,
    category: 'Travel',
    date: new Date(2022, 7, 12),
  },
  {
    id: 'e2',
    title: 'Food',
    amount: 60,
    category: 'Food',
    date: new Date(2022, 0, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 200,
    category: 'Insurance',
    date: new Date(2021, 3, 5),
  },
  {
    id: 'e4',
    title: 'New TV',
    amount: 199.99,
    category: 'Devices',
    date: new Date(2020, 5, 1),
  },
  {
    id: 'e5',
    title: 'New Desk',
    amount: 98.49,
    category: 'Furniture',
    date: new Date(2018, 12, 8),
  },
  {
    id: 'e6',
    title: 'Books',
    amount: 120,
    category: 'Education',
    date: new Date(2022, 4, 12),
  },
  {
    id: 'e67',
    title: 'Laptop',
    amount: 600,
    category: 'Devices',
    date: new Date(2020, 4, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(expensesData);

  const addExpenseHandler = (enteredExpense) => {
    const expense = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  return (
    <Fragment>
      <h1>&#36; Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </Fragment>
  );
};

export default App;
