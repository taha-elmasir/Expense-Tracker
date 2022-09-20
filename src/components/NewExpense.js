import './NewExpense.css';

const NewExpense = () => {
  return (
    <form className='new-expense'>
      <div className='wrapper'>
        <label htmlFor='expense-name'>Expense Name</label>
        <input type='text' placeholder='Name' id='expense-name' required />
      </div>
      <div className='wrapper'>
        <label htmlFor='amount'>Amount</label>
        <input type='text' placeholder='Amount' id='amount' required />
      </div>
      <div className='wrapper'>
        <label htmlFor='category'>Category</label>
        <select id='category' required>
          <option>Travel</option>
          <option>Insurance</option>
          <option>Devices</option>
          <option>Furniture</option>
        </select>
      </div>
      <div className='wrapper'>
        <label htmlFor='date'>Date</label>
        <input type='date' id='date' required />
      </div>
      <button type='submit'>Add Expense</button>
    </form>
  );
};

export default NewExpense;
