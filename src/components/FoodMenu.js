import React from "react";
import Card from "./Card";

import classes from "./FoodMenu.module.css";

const FoodMenu = () => {
	const foodMenuObject = [
		{
			title: "Mixed-Sushi",
			description: "16 pices in a mix of our finest sushi.",
			price: 20.15,
		},
		{
			title: "Poke-Bowl",
			description: "Mixed asian sallad, salmon and sticky rice.",
			price: 18.5,
		},
		{
			title: "Harry's Burger",
			description:
				"120g burger with pickled onions, chili-sauce and sweetpotatoe-fries.",
			price: 16.85,
		},
		{
			title: "Kids Banger",
			description: "Sausage, fries and lots of ketchup.",
			price: 9.99,
		},
		{
			title: "Lasagna",
			description: "Creamy weggie-lasagna.",
			price: 13.85,
		},
	];
	return (
		<Card className={classes["food-menu"]}>
			<ul className={classes["food-menu__list"]}>
				{foodMenuObject.map((course) => {
					return <li>{course.title}</li>;
				})}
			</ul>
		</Card>
	);
};

export default FoodMenu;
