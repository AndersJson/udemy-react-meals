import React from "react";
import CartButton from "./CartButton";

import classes from "./Header.module.css";

const Header = () => {
	return (
		<div className={classes.header}>
			<h2>ReactMeals</h2>
			<CartButton />
		</div>
	);
};

export default Header;
