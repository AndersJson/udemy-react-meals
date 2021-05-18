import React, { useContext } from "react";
import CartContext from "../store/cart-context";

import classes from "./CartCount.module.css";

const CartCount = () => {
	const cartCtx = useContext(CartContext);
	let cartItemCount = 0;

	if (cartCtx.items.length > 0) {
		cartItemCount = cartCtx.items
			.map((item) => item.amount)
			.reduce((acc, current) => {
				return acc + current;
			}, 0);
	}

	return <span className={classes["cart-count"]}>{cartItemCount}</span>;
};

export default CartCount;
