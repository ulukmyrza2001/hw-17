import React, { useContext } from 'react'
import { ExpensesContext } from '../../Store/context'
import { DATA_BASE } from '../../utils/constants/constants'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = ({expensesFilter,filteredYear}) => {
    const {expenses,setExpenses} = useContext(ExpensesContext)
    const deletedHandler = async (id)=>{
        setExpenses(expenses.filter(el=>el.id !== id)) 
              await fetch(`${DATA_BASE}/expenses/${id}.json`,
        {
          method : 'DELETE'
        },
        )  
    }
    let expensesContent = <h2 className='expenses-list__fallback'>No Expenses Found</h2>
	if (expensesFilter.length > 0) {
       expensesContent = expensesFilter.map((element) => {
            return (
                <ExpenseItem
                    key={Math.random()}
                    title={element.title}
                    amount={element.amount}
                    date={element.date}
                    id = {element.id}
                    deletedHandler = {deletedHandler}
                />
            )
        })
	}
    if(filteredYear === 'all' && expenses.length > 0){
       expensesContent = expenses.map((element) => {
    
            return (
                <ExpenseItem
                    key={Math.random()}
                    title={element.title}
                    amount={element.amount}
                    date={element.date}
                    id = {element.id}
                    deletedHandler = {deletedHandler}
                />
            )
        })
    }
	return (
		<ul className='expenses-list'>
            {expensesContent} 
		</ul>
	)
}

export default ExpensesList
