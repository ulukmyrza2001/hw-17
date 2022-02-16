import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = ({expensesFilter,expenses,filteredYear}) => {
    let expensesContent = <h2 className='expenses-list__fallback'>No Expense Found</h2> // бул переменный эгерде массив пустой болсо ушул jsx кодду кайтарат жана ал экранга чыгат эмне себептен let анткени ал ситуацияга жараша бир нече жолу озгорот
	if (expensesFilter.length > 0) { // эгерде филтр болгон массив пустой болбосо анда переменныйга жанында турган код присвоение болот дагы карточка рендер болот,болбосо жанагы эле h2 корсотулот
       expensesContent = expensesFilter.map((element) => {
            return (
                <ExpenseItem
                    key={Math.random()}
                    title={element.title}
                    amount={element.amount}
                    date={element.date}
                />
            )
        })
	}
    if(filteredYear == 'all' && expenses.length > 0){//эгер селектен келген значение 'all' деген созго барабар болсо жана филтр болбогон массив пустой болбосо анда ошол массив рендер болот
        console.log(expenses);
       expensesContent = expenses.map((element) => {
    
            return (
                <ExpenseItem
                    key={Math.random()}
                    title={element.title}
                    amount={element.amount}
                    date={element.date}
                />
            )
        })
    }
	return (
		<ul className='expenses-list'>
            {expensesContent} {/**бул жогоруда айткан переменный условияга жараша озуно h2 алат же карточканы алат жана экранга отрисовка болот */}
		</ul>
	)
}

export default ExpensesList
