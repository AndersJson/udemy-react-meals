import React from "react";
import ReactDOM from "react-dom";
import CartButton from "./CartButton";
import CartIcon from "./CartIcon";
import CartCount from "./CartCount";
import CartModal from "./CartModal";

import classes from "./Header.module.css";

const Header = () => {
	return (
		<div className={classes.header}>
			{/* 
			ReactDOM.createPortal(
				<CartModal />,
				document.getElementById("cart-modal")
			) 
			*/}
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
