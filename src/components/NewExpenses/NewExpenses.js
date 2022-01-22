import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';
const NewExpenses = (props) => {//expensesForm'ду ороп турган компонент

  const SaveExpensesDataHandler = (enteredExpensesData) =>{//пше git бул функция менен expensesForm'дан данныйларды подьем состояние кылып алабыз
      const expensesData = {// экспенсесформдан келген данныйларды ушул обьектке салабыз id дагы беребиз 
        ...enteredExpensesData,
        id : Math.random().toString()
      }
      props.newData(expensesData) //бул жерден келген данныйларды app'ка подьем состояние кылабыз
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpensesData = {SaveExpensesDataHandler} />
    </div>
  );
};

export default NewExpenses;
