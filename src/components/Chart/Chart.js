import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const values = props.expensesData.map((expense) => expense.value);
  const maxValue = Math.max(...values);
  return (
    <div className='chart'>
      {props.expensesData.map((expenseData) => (
        <ChartBar
          key={expenseData.label}
          label={expenseData.label}
          value={expenseData.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;
