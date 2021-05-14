import React from "react";
import OrderInput from "./OrderInput";

import classes from "./FoodMenuItem.module.css";

const FoodMenuItem = (props) => {
	return (
		<li className={classes["food-menu__item"]}>
			<div className={classes["food-menu__info"]}>
				<p className={classes["course-title"]}>{props.title}</p>
				<p className={classes["course-description"]}>{props.description}</p>
				<p className={classes["course-price"]}>{`$${props.price}`}</p>
			</div>
			<div className={classes["food-menu__action"]}>
				<span>
					<OrderInput id={props.id} />
				</span>
				<p>Button</p>
			</div>
		</li>
	);
};

export default FoodMenuItem;
