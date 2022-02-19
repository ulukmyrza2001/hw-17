import React, { useCallback, useEffect, useState } from 'react'
import Loader from './components/UI/Loader'
import Expenses from './components/Expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses'
import { DATA_BASE } from './utils/constants/constants'
import { Alert } from '@mui/material'
import { ExpensesContext } from './Store/context'
const App = () => {
	const [expenses, setExpenses] = useState([])
	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState(null)
	const [errorMassage, setErrorMassage] = useState(null)

	const getData = useCallback(async () => {
		try {
			setLoading(true)
			const response = await fetch(`${DATA_BASE}/expenses.json`)
			if (response.ok) {
				const data = await response.json()
				let loadedData = []
				for (const key in data) {
					loadedData.push({
						id: key,
						title: data[key].title,
						amount: data[key].amount,
						date: new Date(data[key].date),
					})
				}
				setExpenses(loadedData)
			} else {
				throw new Error('error')
			}
		} catch (error) {
			setErrorMassage(error.message)
		}
		setLoading(false)
	}, [])
	setTimeout(() => {
		setErrorMassage(null)
		setMessage(null)
	}, 5000)

	useEffect(() => {
		getData()
	}, [getData])
	return (
		<ExpensesContext.Provider  value={{
			expenses : expenses,
			setExpenses : setExpenses,
			setMessage :setMessage,
			getData : getData
		}}>
			<div>
				{loading && <Loader />}
				{(errorMassage && (
					<Alert className='alert' severity='error'>
						{errorMassage}
					</Alert>
				)) ||
					(message && (
						<Alert className='alert' severity='success'>
							{message}
						</Alert>
					)) ||
					(expenses.length === 0 && (
						<Alert className='alert' severity='warning'>
							No Expenses Found
						</Alert>
					))}

				<NewExpenses />
				<Expenses/>
			</div>
		</ExpensesContext.Provider>
	)
}

export default App
