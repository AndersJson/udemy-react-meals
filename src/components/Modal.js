import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

import classes from "./Modal.module.css";

const ModalBackdrop = () => {
	return <div className={classes["modal--backdrop"]}></div>;
};

const ModalOverlay = (props) => {
	return (
		<Card
			className={`${classes["modal-overlay"]} ${classes["modal-overlay--white"]}`}
		>
			{props.children}
		</Card>
	);
};

const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<ModalBackdrop />,
				document.getElementById("cart-modal")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay />,
				document.getElementById("cart-modal")
			)}
		</Fragment>
	);
};

export default Modal;
