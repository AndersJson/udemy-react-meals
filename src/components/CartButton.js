import React from "react";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
	return <button>{props.children}</button>;
};

export default CartButton;
