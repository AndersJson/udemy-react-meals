import React, { useContext } from "react";
import MenuItemForm from "./MenuItemForm";
import CartContext from "../store/cart-context";

import classes from "./FoodMenuItem.module.css";

const FoodMenuItem = (props) => {
	const cartCtx = useContext(CartContext);

	const addToCartHandler = (amount) => {
		cartCtx.addItem({
			id: props.id,
			title: props.title,
			price: props.price,
			amount: amount,
		});
	};

	return (
		<li className={classes["food-menu__item"]}>
			<div className={classes["food-menu__info"]}>
				<p className={classes["course-title"]}>{props.title}</p>
				<p className={classes["course-description"]}>{props.description}</p>
				<p className={classes["course-price"]}>{`$${props.price.toFixed(
					2
				)}`}</p>
			</div>
			<MenuItemForm onAddToCart={addToCartHandler} id={props.id} />
		</li>
	);
};

export default FoodMenuItem;
