import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Card from "./components/Card";
import FoodMenu from "./components/FoodMenu";
import Modal from "./components/Modal";

import classes from "./App.module.css";

function App() {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const toggleModalVisibility = () => {
		setIsModalVisible(!isModalVisible);
	};

	useEffect(() => {
		if (isModalVisible === true) {
			document.getElementsByTagName("body")[0].style.overflowY = "hidden";
		} else {
			document.getElementsByTagName("body")[0].style.overflowY = "auto";
		}
	}, [isModalVisible]);

	return (
		<div className={classes.App}>
			<Modal onClick={toggleModalVisibility} isVisible={isModalVisible} />
			<Header onClick={toggleModalVisibility} />
			<div className={classes.hero}></div>
			<div className={classes.content}>
				<Card className={classes["welcome-card"]}>
					<h1>Delicious Food, Delivered To You</h1>
					<p>
						Choose your favourite meal from our broad selection of available
						meals and enjoy a delicious lunch or dinner at home.
					</p>
					<p>
						All our meals are cooked with high-quality ingredients, just-in-time
						and of course by experienced chefs!
					</p>
				</Card>
				<div className={classes["menu-wrapper"]}>
					<FoodMenu />
				</div>
			</div>
		</div>
	);
}

export default App;
