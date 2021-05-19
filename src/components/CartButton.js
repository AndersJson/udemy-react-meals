import React, { useContext } from "react";
import CartIcon from "./CartIcon";
import CartCount from "./CartCount";
import CartContext from "../store/cart-context";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
	const cartCtx = useContext(CartContext);
	const cartItemCount = cartCtx.items.reduce((acc, current) => {
		return acc + current.amount;
	}, 0);

	return (
		<button className={classes["cart-button"]} onClick={props.onClick}>
			<CartIcon />
			<p>Your Cart</p>
			<CartCount cartItemAmount={cartItemCount} />
		</button>
	);
};

export default CartButton;
