import Header from "./components/Header";
import Card from "./components/Card";
import FoodMenu from "./components/FoodMenu";

import classes from "./App.module.css";

function App() {
	return (
		<div className={classes.App}>
			<Header />
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
