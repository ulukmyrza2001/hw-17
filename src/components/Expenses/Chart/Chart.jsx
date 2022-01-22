import './Chart.css'
import React from 'react'
import ChartBar from './ChartBar'

const Chart = (props) => {
	const dataPointsValues = props.dataPoints.map((data) => data.value)//бул жерде массивдеги чыгашаларды алып алабыз бир переменныйга
	const totalMax = Math.max(...dataPointsValues)//math.max'тын жардамы менен чыгашалардын эн кобун totalMax деген переменныйга алабыз
	return (
		<div className='chart'>
			{props.dataPoints.map((dataPoint) => (//props'тан келеген массивди аралап чартбар деген компонентке жонотобуз labelди чыгашаларды жана ошондой эле эн чон чыгашаны алар версткага керек болот
				<ChartBar //key'ге label'ди бердик себеби алар уникальный
				    key={dataPoint.label} 
					value={dataPoint.value}
					maxValue={totalMax}
					label={dataPoint.label}
				/>
			))}
		</div>
	)
}

export default Chart
