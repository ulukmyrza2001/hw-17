import { useContext, useState } from 'react'
import { ExpensesContext } from '../../Store/context'
import { DATA_BASE } from '../../utils/constants/constants'
import './ExpenseForm.css'

const ExpenseForm = () => {
	const {setMessage,getData} = useContext(ExpensesContext)
	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')
	const [showForm, setShowForm] = useState(false)

	//======================================
	const titleChangeHandler = (event) => {
		setTitle(event.target.value)
	}

	const amountChangeHandler = (event) => {
		setAmount(event.target.value)
	}

	const dateChangeHandler = (event) => {
		setDate(event.target.value)
	}

	const submitHandler = (event) => {
		event.preventDefault()
		if (title && amount && date) {
			const expensesData = {
				title: title,
				amount: Number(amount),
				date: date,
			}
			fetch(`${DATA_BASE}/expenses.json`, {
				method: 'POST',
				body: JSON.stringify(expensesData),
				heaers: {
					'content-type': 'application/json',
				},
			})
			setMessage('Your data have successfully saved')
			getData()
			setShowForm(false)
			setTitle('')
			setAmount('')
			setDate('')
		} else {
			alert('Fill the field')
		}
	}

	let showNewExpense = (
		<button onClick={() => setShowForm(true)}>Add New Expense</button>
	)

	if (showForm) {
		showNewExpense = (
			<>
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
					<button type='submit'>Add Expense</button>
					<button onClick={() => setShowForm(false)}>Cancel</button>
				</div>
			</>
		)
	}

	return <form onSubmit={submitHandler}>{showNewExpense}</form>
}

export default ExpenseForm
