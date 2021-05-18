import React from "react";
import CartButton from "./CartButton";

import classes from "./Header.module.css";

const Header = (props) => {
	return (
		<div className={classes.header}>
			<h2>ReactMeals</h2>
			<CartButton onClick={props.onClick} />
		</div>
	);
};

export default Header;
