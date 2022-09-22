import { Fragment, useRef, useState } from 'react';

import './NewExpense.css';

const NewExpense = (props) => {
  const [isShown, setIsShown] = useState(false);
  const nameRef = useRef();
  const amountRef = useRef();
  const categoryRef = useRef();
  const dateRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const expense = {
      title: nameRef.current.value,
      amount: +amountRef.current.value,
      category: categoryRef.current.value,
      date: new Date(dateRef.current.value),
    };

    props.onAddExpense(expense);

    nameRef.current.value =
      amountRef.current.value =
      categoryRef.current.value =
      dateRef.current.value =
        '';
  };

  const newExpenseHandler = () => setIsShown(true);
  const removeFormHandler = () => setIsShown(false);

  return (
    <Fragment>
      {isShown && (
        <form className='new-expense' onSubmit={submitHandler}>
          <div className='wrapper'>
            <label htmlFor='expense-name'>Expense Name</label>
            <input
              type='text'
              placeholder='Name'
              id='expense-name'
              ref={nameRef}
              required
            />
          </div>
          <div className='wrapper'>
            <label htmlFor='amount'>Amount</label>
            <input
              type='number'
              placeholder='Amount'
              id='amount'
              min='1'
              ref={amountRef}
              required
            />
          </div>
          <div className='wrapper'>
            <label htmlFor='category'>Category</label>
            <select id='category' defaultValue='' ref={categoryRef} required>
              <option value='' disabled hidden>
                Choose here
              </option>
              <option>Travel</option>
              <option>Insurance</option>
              <option>Devices</option>
              <option>Furniture</option>
            </select>
          </div>
          <div className='wrapper'>
            <label htmlFor='date'>Date</label>
            <input
              type='date'
              min='2018-01-01'
              max='2022-12-31'
              id='date'
              ref={dateRef}
              required
            />
          </div>
          <div className='control'>
            <button type='button' onClick={removeFormHandler}>
              Cancel
            </button>
            <button type='submit'>Add Expense</button>
          </div>
        </form>
      )}
      {isShown || (
        <button className='new-expense__btn' onClick={newExpenseHandler}>
          Add New Expense
        </button>
      )}
    </Fragment>
  );
};

export default NewExpense;
