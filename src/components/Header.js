import React from "react";
import classes from "./Header.module.css";

const Header = () => {
	return (
		<div className={classes.header}>
			<h2>ReactMeals</h2>
			<div>CART</div>
		</div>
	);
};

export default Header;