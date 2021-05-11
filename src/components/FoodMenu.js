import React from "react";
import Card from "./Card";

import classes from "./FoodMenu.module.css";

const FoodMenu = () => {
	const foodMenuObject = [1, 2, 3, 4];
	return (
		<Card className={classes["food-menu"]}>
			<ul>
				{foodMenuObject.map((course) => {
					return <li>{course * 2}</li>;
				})}
			</ul>
		</Card>
	);
};

export default FoodMenu;
