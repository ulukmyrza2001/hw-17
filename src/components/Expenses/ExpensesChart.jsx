import React, { useContext } from 'react'
import { ExpensesContext } from '../../Store/context'
import Chart from './Chart/Chart'

const ExpensesChart = (props) => {//бул компонент айлардын расходун корсотот
	const {expenses} = useContext(ExpensesContext)
	const chartDataPoints = [//бул массив ар бир айлын атын жана ошонодой эле кеткен расходдорун камтыйт ошол расходдордун баары valueге тушуп турат
		{ label: 'Jan', value: 0 },
		{ label: 'Feb', value: 0 },
		{ label: 'Mar', value: 0 },
		{ label: 'Apr', value: 0 },
		{ label: 'May', value: 0 },
		{ label: 'Jun', value: 0 },
		{ label: 'Jul', value: 0 },
		{ label: 'Aug', value: 0 },
		{ label: 'Sep', value: 0 },
		{ label: 'Oct', value: 0 },
		{ label: 'Nov', value: 0 },
		{ label: 'Dec', value: 0 },
	]
	if (props.selected === 'all') { //selec'тин значенисы all'го барабар болсо ичиндеги код аткарылат
		for (const expense of expenses) {//бул жерде пропс болуп келген  массивди аралайбыз б.а филтр болбогон массивди
			const expenseMonth = expense.date.getMonth()//аралап ошол массивдеги датанын айларын expensesMonth деген переменныйга алабыз,себеби бул переменный озуно 12 айды камтыйт керектуу учурда керектуусун чыгарып индекс ордуна колдонобуз
			chartDataPoints[expenseMonth].value += expense.amount//chartDataPoints'тан value'лерине amount деген инпуттан келген чыгашалар кошулуп турат,башкача айтканда ал инпутка тушкон чыгаша пропстан келген массивге тушот,ошону кошуп турат бул жерде,кошулган чыгашалардын процентин чыгарып динамический катары диаграмманын стилине беребиз бийиктигине(height)
		}
	} else {
		for (const expense of props.expenses) {//бул жерде пропс болуп келген филтрленген массивди аралайбыз 
			const expenseMonth = expense.date.getMonth()//аралап ошол массивдеги датанын айларын expensesMonth деген переменныйга алабыз,себеби бул переменный озуно 12 айды камтыйт керектуу учурда керектуусун чыгарып индекс ордуна колдонобуз
			chartDataPoints[expenseMonth].value += expense.amount//chartDataPoints'тан value'лерине amount деген инпуттан келген чыгашалар кошулуп турат,башкача айтканда ал инпутка тушкон чыгаша пропстан келген массивге тушот,ошону кошуп турат бул жерде,кошулган чыгашалардын процентин чыгарып динамический катары диаграмманын стилине беребиз бийиктигине(height)
		}
	}
//анан ошол чыгашалар кошулуп Chart деген компонентке кетет
	return <Chart dataPoints={chartDataPoints} /> 
}

export default ExpensesChart
