import React from "react";

import classes from "./FoodMenuItem.module.css";

const FoodMenuItem = (props) => {
	return (
		<li className={classes["food-menu__item"]}>
			<div className={classes["food-menu__info"]}>
				<p>Info</p>
			</div>
			<div className={classes["food-menu__action"]}>
				<p>Action</p>
			</div>
		</li>
	);
};

export default FoodMenuItem;
