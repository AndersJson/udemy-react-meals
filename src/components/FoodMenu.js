import React from "react";
import Card from "./Card";
import FoodMenuItem from "./FoodMenuItem";

import classes from "./FoodMenu.module.css";

const FoodMenu = () => {
	const foodMenuObject = [
		{
			id: "m1",
			title: "Mixed-Sushi",
			description: "16 pices in a mix of our finest sushi.",
			price: 20.15,
		},
		{
			id: "m2",
			title: "Poke-Bowl",
			description: "Mixed asian sallad, salmon and sticky rice.",
			price: 18.55,
		},
		{
			id: "m3",
			title: "Harry's Burger",
			description:
				"120g burger with pickled onions, chili-sauce and sweetpotatoe-fries.",
			price: 16.85,
		},
		{
			id: "m4",
			title: "Kids Banger",
			description: "Sausage, fries and lots of ketchup.",
			price: 9.99,
		},
		{
			id: "m5",
			title: "Lasagna",
			description: "Creamy weggie-lasagna.",
			price: 13.85,
		},
		{
			id: "m6",
			title: "Soup de mare",
			description: "Sweet chilli seafood-soup.",
			price: 16.25,
		},
		{
			id: "m7",
			title: "Carbonara",
			description: "Pasta carbonare de penne.",
			price: 15.95,
		},
	];

	const inputChangeHandler = (e) => {
		console.log(e.target.value);
	};

	return (
		<Card className={classes["food-menu"]}>
			<ul className={classes["food-menu__list"]}>
				{foodMenuObject.map((course) => {
					return (
						<FoodMenuItem
							key={course.id}
							title={course.title}
							description={course.description}
							price={course.price}
							id={course.id}
							inputHandler={inputChangeHandler}
						/>
					);
				})}
			</ul>
		</Card>
	);
};

export default FoodMenu;
