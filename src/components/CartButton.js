import React, { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import CartCount from "./CartCount";
import CartContext from "../store/cart-context";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
	const cartCtx = useContext(CartContext);
	const [isCartButtonHighlighted, setIsCartButtonHighlighted] = useState(false);

	const { items } = cartCtx;

	const cartItemCount = items.reduce((acc, current) => {
		return acc + current.amount;
	}, 0);

	const btnClasses = `${classes["cart-button"]} ${
		isCartButtonHighlighted ? classes.bump : ""
	}`;

	useEffect(() => {
		if (items.length === 0) {
			return;
		}

		setIsCartButtonHighlighted(true);

		let timer = setTimeout(() => {
			setIsCartButtonHighlighted(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	return (
		<button className={btnClasses} onClick={props.onClick}>
			<CartIcon />
			<p>Your Cart</p>
			<CartCount cartItemAmount={cartItemCount} />
		</button>
	);
};

export default CartButton;
