import React from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'
import Button from './Button'

const ModalPortal = (props) => {
	return (
		<>
			<div className={classes.bg_layer}></div>
			<div className={classes.modal}>
				<header className={classes.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={classes.content}>
					<p>{props.massage}</p>
				</div>
				<footer className={classes.actions}>
					{props.children}
					<Button id={props.id} onClick={props.onConfirm}>
						OK
					</Button>
				</footer>
			</div>
		</>
	)
}
const Modal = (props) => {
	return ReactDOM.createPortal(
		<ModalPortal
			title={props.title}
			massage={props.massage}
			onConfirm={props.onConfirm}
			children={props.children}
		/>,
		document.getElementById('modal-root'),
	)
}

export default Modal
