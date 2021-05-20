import React from "react";

import classes from "./CartListItem.module.css";

const CartListItem = (props) => {
	const price = `$${props.price.toFixed(2)}`;
	return (
		<li className={classes["cart-item"]}>
			<div className={classes["cart-item__info"]}>
				<p className={classes["cart-item__title"]}>{props.title}</p>
				<span className={classes["cart-item__price-wrapper"]}>
					<p className={classes["cart-item__price"]}>{price}</p>
					<span
						className={classes["cart-item__amount"]}
					>{`x${props.amount}`}</span>
				</span>
			</div>
			<div className={classes["cart-item__action"]}>+ / -</div>
		</li>
	);
};

export default CartListItem;
