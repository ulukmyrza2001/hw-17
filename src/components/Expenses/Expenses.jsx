import React, { useContext, useState } from 'react';
import { ExpensesContext } from '../../Store/context';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = () => {
  const {expenses} = useContext(ExpensesContext)
  const [filteredYear,setFilteredYear] = useState('all')
  const filterChangeHandler = (selectedYear) =>{
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = expenses.filter((el)=>{
    return el.date.getFullYear().toString() === filteredYear 
  })
  return (
    <Card className="expenses"> 
      <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}/> 
      <ExpensesChart expenses = {filteredExpenses} selected = {filteredYear}/> 
      <ExpensesList filteredYear={filteredYear} expensesFilter = {filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
