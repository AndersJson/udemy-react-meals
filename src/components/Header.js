import React from "react";
import CartButton from "./CartButton";
import CartIcon from "./CartIcon";
import CartCount from "./CartCount";

import classes from "./Header.module.css";

const Header = () => {
	return (
		<div className={classes.header}>
			<h2>ReactMeals</h2>
			<CartButton>
				<CartIcon />
				<p>Your Cart</p>
				<CartCount />
			</CartButton>
		</div>
	);
};

export default Header;
