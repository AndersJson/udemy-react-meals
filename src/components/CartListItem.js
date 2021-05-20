import React from "react";

import classes from "./CartListItem.module.css";

const CartListItem = (props) => {
	const price = `$${props.price}`;

	return (
		<li className={classes["cart-item"]}>
			<div className={classes["cart-item__info"]}>
				<p className={classes["cart-item__title"]}>{props.title}</p>
				<p className={classes["cart-item__price"]}>{price}</p>
			</div>
			<div className={classes["cart-item__action"]}>The input</div>
		</li>
	);
};

export default CartListItem;
