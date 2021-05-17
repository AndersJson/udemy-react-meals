import React from "react";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
	return <button className={classes["cart-button"]}>{props.children}</button>;
};

export default CartButton;
