import React from 'react';

import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });//датанын айы тузулот
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });//датанын куну тузулот 
  const year = props.date.getFullYear();//датанын жылы тузулот

  return (//бул жерден дата верстка болот динамический болуп
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
