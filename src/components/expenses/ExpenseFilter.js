import { useRef } from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
  const filterRef = useRef();
  const filterHandler = (e) => props.onFilter(e.target.value);
  const resetHandler = () => {
    props.onReset();
    filterRef.current.value = '';
  };

  return (
    <div className='expense-filter'>
      <label htmlFor='filter'>Filter by year:</label>
      <select
        id='filter'
        defaultValue=''
        ref={filterRef}
        onChange={filterHandler}
      >
        <option value='' hidden disabled>
          YEAR
        </option>
        <option value='2022'>2022</option>
        <option value='2021'>2021</option>
        <option value='2020'>2020</option>
        <option value='2019'>2019</option>
        <option value='2018'>2018</option>
      </select>
      <button className='reset-btn' onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
};

export default ExpenseFilter;
