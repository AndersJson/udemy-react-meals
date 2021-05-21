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

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const cartListItems = cartCtx.items.map((item) => {
		return (
			<CartListItem
				key={item.id}
				title={item.title}
				price={item.price}
				amount={item.amount}
				onAdd={cartItemAddHandler.bind(null, item)}
				onRemove={cartItemRemoveHandler.bind(null, item.id)}
			/>
		);
	});

	const totalPrice = cartCtx.items.reduce((acc, current) => {
		return acc + current.amount * current.price;
	}, 0);

	const hasItems = cartCtx.items.length > 0;
	const totalPriceOutput = `$${totalPrice.toFixed(2)}`;

	return (
		<Fragment>
			{ReactDOM.createPortal(
				<ModalBackdrop onClick={props.onClick} />,
				document.getElementById("cart-modal")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>
					<ul className={classes["cart-list"]}>{cartListItems}</ul>
					<div className={classes["cart-summary"]}>
						<span>Total Price:</span>
						<span>{totalPriceOutput}</span>
					</div>
					<div className={classes["cart__buttons"]}>
						<Button className="btn--secondary" onClick={props.onClick}>
							Close
						</Button>
						{hasItems && <Button>Buy</Button>}
					</div>
				</ModalOverlay>,
				document.getElementById("cart-modal")
			)}
		</Fragment>
	);
};

export default Cart;
