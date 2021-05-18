import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

import classes from "./Modal.module.css";

const ModalBackdrop = (props) => {
	if (props.isVisible === true) {
		return (
			<div className={classes["modal--backdrop"]} onClick={props.onClick}></div>
		);
	} else {
		return "";
	}
};

const ModalOverlay = (props) => {
	if (props.isVisible === true) {
		return (
			<Card
				className={`${classes["modal-overlay"]} ${classes["modal-overlay--white"]}`}
			>
				{props.children}
			</Card>
		);
	} else {
		return "";
	}
};

const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<ModalBackdrop isVisible={props.isVisible} onClick={props.onClick} />,
				document.getElementById("cart-modal")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay isVisible={props.isVisible} />,
				document.getElementById("cart-modal")
			)}
		</Fragment>
	);
};

export default Modal;
