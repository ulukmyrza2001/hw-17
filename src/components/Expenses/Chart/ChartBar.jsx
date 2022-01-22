import './ChartBar.css'
import React from 'react'

const ChartBar = (props) => {
	let barFillHeight = '0%' //бизде бир ушул переменный бар по умолчанный 0% анткени чыгаша жок болсо эч нерсе которулбой туруш учун
	if (props.maxValue > 0) {// эгер maxValue 0дон чон болсо ичиндеги код аткарылат эгер 0го барабар же кичине болсо чыгаша жок дегенди билдирет
		barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%' //ушул формула аркылуу процентин чыгарып алабыз жана math.round менен тегеректеп алабыз анан BarFillHeight'ке присвоение кылабыз
	}
	return (//бул жерде chart'тын версткасы болот
		<div className='chart-bar'>
			<div className='chart-bar__inner'>
				<div
					className='chart-bar__fill'
					style={{ height: barFillHeight }}//бул жерде barFillHeight озуно кандайдыр бир санды камтыйт чейин,башкача айтканда динамический чыгашаларга коз каранды кобойсо кобойот азайса азайат ошого жараша дивтин дагы бийиктиги керектуу учурда бийиктеп керектуу учурда тушуп турат
				></div>
			</div>
			<div className='chart-bar__label'>{props.label}</div>
		</div>
	)
}

export default ChartBar
