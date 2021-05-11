import React from "react";
import Card from "./Card";

import classes from "./FoodMenu.module.css";

const FoodMenu = () => {
	return (
		<Card className={classes["food-menu"]}>
			<h3>The Menu</h3>
		</Card>
	);
};

export default FoodMenu;
