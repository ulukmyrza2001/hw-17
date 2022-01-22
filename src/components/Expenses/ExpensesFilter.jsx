import React from 'react'
import './ExpensesFilter.css'

const ExpensesFilter = (props) => {
    const selectChangeHandler = (e) =>{// бул функция селект onchange болгон сайын иштеп пропстан келген функцияга селектин значениясын откоруп берип турат
       props.onChangeFilter(e.target.value) // пропстан келген функцияга селекттин значениясын берип коебуз,бул жерде подьем состояние болуп жатат
    }
	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by year</label>
				<select value={props.selected} onChange={selectChangeHandler}> {/**селект двух сторонний привязка болгон анткени состояниеси башка копонентке барып тушуп кайра valueсине ошону кабыл алып жатат (управляемый) */}
					<option value='2025'>2025</option>
					<option value='2024'>2024</option>
					<option value='2023'>2023</option>
					<option value='2022'>2022</option>
                    <option value='all'>Select all</option>
				</select>
			</div>
		</div>
	)
}

export default ExpensesFilter
