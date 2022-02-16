import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
	const [title, setTitle] = useState('') //бул 3 состояние уч инпуттун значенияларын оздоруно алат башкача айтканда двух сторонний привязка кылабыз(управляемый)
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')
	const [showForm, setShowForm] = useState(false)

	//======================================
	const titleChangeHandler = (event) => {
		//бул функция уч инпут onChange болгон сайын жогорудагы стейттерге значенияларын откозуп берип турат
		setTitle(event.target.value)
	}

	const amountChangeHandler = (event) => {
		setAmount(event.target.value)
	}

	const dateChangeHandler = (event) => {
		setDate(event.target.value)
	}

	const submitHandler = (event) => {
		//бул функция отправка формы баардык инпуттардын значенияларын алып обьект кылып аны подьем состояние кылып newExpenses'ке жонотот
		event.preventDefault() //по умолчанный событыяны очурот антпесе страница перезагрузка боо берет
		if (title && amount && date) {
			//эгер ушул стейттердин ичинде бир нерсе болсо ичиндеги жогоруда айткандай код аткарылат
			const expensesData = {
				title: title,
				amount: Number(amount),
				date: new Date(date),
			}
			props.onSaveExpensesData(expensesData)
			setShowForm(false)
		} else {
			//болбосо  модалка чыгат
			alert('hgfd')
		}
	}

	let showNewExpense;

	if(!showForm){
		showNewExpense = <button onClick = {()=>setShowForm(true)} >Add New Expense</button>
	}else{
	showNewExpense =	<>
		<div className='new-expense__controls'>
		<div className='new-expense__control'>
			<label>Title</label>
			<input
				name='title'
				type='text'
				value={title}
				onChange={titleChangeHandler}
				size={10}
			/>
		</div>
		<div className='new-expense__control'>
			<label>Amount</label>
			<input
				name='amount'
				type='number'
				min='0.1'
				step='1'
				value={amount}
				onChange={amountChangeHandler}
			/>
		</div>
		<div className='new-expense__control'>
			<label>Date</label>
			<input
				name='date '
				type='date'
				min='2022-01-01'
				value={date}
				onChange={dateChangeHandler}
			/>
		</div>
	</div>
	<div className='new-expense__actions'>
		<button  type='submit'>Add Expense</button>
		<button onClick={()=>setShowForm(false)}>Cancel</button>
	</div>
	</>
	}

	return (
		/**бул жерде форманын версткасы ошол эле учурда событыялары */
		<form onSubmit={submitHandler}>
			{showNewExpense}
			
		</form>
	)
}

export default ExpenseForm
