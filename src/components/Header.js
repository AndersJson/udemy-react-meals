import React, { useState } from "react";
import ReactDOM from "react-dom";
import CartButton from "./CartButton";
import CartIcon from "./CartIcon";
import CartCount from "./CartCount";
import ModalWrapper from "./ModalWrapper";
import Card from "./Card";

import classes from "./Header.module.css";

const Header = () => {
	const [displayModal, setDisplayModal] = useState(false);

	const toggleModal = () => {
		setDisplayModal((prev) => {
			return !prev;
		});
	};

	return (
		<div className={classes.header}>
			{ReactDOM.createPortal(
				<ModalWrapper overlayClickHandler={toggleModal} show={displayModal}>
					<Card className={classes["cart-modal"]}>
						<h1>Hello</h1>
					</Card>
				</ModalWrapper>,
				document.getElementById("cart-modal")
			)}
			<h2>ReactMeals</h2>
			<CartButton clickFunction={toggleModal}>
				<CartIcon />
				<p>Your Cart</p>
				<CartCount />
			</CartButton>
		</div>
	);
};

export default Header;
