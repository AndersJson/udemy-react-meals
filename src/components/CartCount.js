import React from "react";

import classes from "./CartCount.module.css";

const CartCount = (props) => {
	return <span className={classes["cart-count"]}>{props.cartItemAmount}</span>;
};

export default CartCount;
