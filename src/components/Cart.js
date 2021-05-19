import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

import classes from "./Cart.module.css";

const ModalBackdrop = (props) => {
	return (
		<div className={classes["modal--backdrop"]} onClick={props.onClick}></div>
	);
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

const Cart = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<ModalBackdrop onClick={props.onClick} />,
				document.getElementById("cart-modal")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay></ModalOverlay>,
				document.getElementById("cart-modal")
			)}
		</Fragment>
	);
};

export default Cart;
