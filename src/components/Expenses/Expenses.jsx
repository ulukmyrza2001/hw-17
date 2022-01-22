import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear,setFilteredYear] = useState('all')// селектен келген value'лер ушул стейтке тушот мисалы 2022, 2023...
  const filterChangeHandler = (selectedYear) =>{// селектен келген значениялар функция аркылуу келет башкача айтканда подьем состояние
    setFilteredYear(selectedYear)// селектен onchange болуп келген значениялар ушул setFiltered'ке берилди
  }
  const filteredExpenses = props.items.filter((el)=>{// бул жерде props.item'ди филтр кылып жатабыз items каяктан келген,албетте app'тан келген
    return el.date.getFullYear().toString() === filteredYear //данныйдын датасындагы жылга селектен келген жыл барабар болсо анда ошону жаны массивке кайтарып алабыз
  })
  return (
    <Card className="expenses"> {/** UI компонент бизге корунуп турган карточкалардын оберткасы */}
      <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}/> {/** filter логикасын алган компонент. Филтр болгон массивди жана селектен келген значенияны(жылдарды) пропс аркылуу кетирдик */}
      <ExpensesChart allExpenses = {props.items} expenses = {filteredExpenses} selected = {filteredYear}/> 
      <ExpensesList filteredYear={filteredYear} expenses = {props.items} expensesFilter = {filteredExpenses}/> {/** бул компонент аркылуу бизге корсотулуп жаткан карточкаларды рендер кылабыз озуно  Филтр болгон массивди жана селектен келген значенияны(жылдарды) пропс аркылуу алат */}
    </Card>
  );
};

export default Expenses;
