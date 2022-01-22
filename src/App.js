import React, { useState } from 'react'

import Expenses from './components/Expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses'

const INIT_DATA = [
	//бул данный статикалык б.а озгорбойт стейттин по умолчанный состояниясы
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2022, 7, 14),
	},
	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2023, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2024, 5, 12),
	},
]

const App = () => {
	//корневый компонент App
	const [expenses, setExpenses] = useState(INIT_DATA) // экранга рендер болуп чыкчу данныйлардын стейти

	const NewExpensesData = (newData) => {
		/// подьем состояния болуп дочерний компоненттен то есть newExpenses'тен данныйларды алып setExpenses'ке мурунку состояниесине данныйды кошуп беребиз
		setExpenses((prevExpenses) => {
			//бул  превстейт стейттин предыдущий состояниесин сактап калат
			return [...prevExpenses, newData]
		})
	}

	return (
		<div>
			<NewExpenses newData={NewExpensesData} /> {/*бул компонент аркылуу жаны данныйлар келет ал данныйлар expensesForm'дан  келет formдан толтурулуп келинет(инпуттардан) */}
			<Expenses items={expenses} />{/* expenses'тен баардык биз тузгон придожениянын структурасы логикасы мисалы филтр,чарт,дата ж.б*/}
		</div>
	)
}

export default App
