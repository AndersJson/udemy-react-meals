import React from "react";
import CartIcon from "./CartIcon";
import CartCount from "./CartCount";

import classes from "./CartButton.module.css";

const CartButton = () => {
	return (
		<button className={classes["cart-button"]}>
			<CartIcon />
			<p>Your Cart</p>
			<CartCount />
		</button>
	);
};

export default CartButton;
