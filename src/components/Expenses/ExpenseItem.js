import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import  Button  from '../UI/Button'

const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <Button onClick = {()=>props.deletedHandler(props.id)}>Delete</Button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
