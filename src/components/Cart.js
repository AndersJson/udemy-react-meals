import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import CartContext from "../store/cart-context";
import Card from "./Card";
import CartListItem from "./CartListItem";
import Button from "./Button";

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
	const cartCtx = useContext(CartContext);
	const cartListItems = cartCtx.items.map((item) => {
		return (
			<CartListItem
				title={item.title}
				price={item.price}
				amount={item.amount}
			/>
		);
	});

	return (
		<Fragment>
			{ReactDOM.createPortal(
				<ModalBackdrop onClick={props.onClick} />,
				document.getElementById("cart-modal")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>
					<ul className={classes["cart-list"]}>{cartListItems}</ul>
					<div className={classes["cart__buttons"]}>
						<Button>Close</Button>
						<Button>Buy</Button>
					</div>
				</ModalOverlay>,
				document.getElementById("cart-modal")
			)}
		</Fragment>
	);
};

export default Cart;
