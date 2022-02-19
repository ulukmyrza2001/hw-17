import React from 'react'
import './Loader.css'

const Loader = () => {
	return (
        <>
        <div className='bg_layer'></div>
        	<div className='lds-default'>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
        </>
	
	)
}

export default Loader
