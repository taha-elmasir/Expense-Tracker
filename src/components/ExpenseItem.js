import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const date = props.date.toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <tr>
      <td>{props.name}</td>
      <td>${props.amount}</td>
      <td>{props.category}</td>
      <td>{date}</td>
    </tr>
  );
};

export default ExpenseItem;
