import Header from "./components/Header";
import Card from "./components/Card";
import classes from "./App.module.css";

function App() {
	return (
		<div className={classes.App}>
			<Header />
			<div className={classes.hero}></div>
			<div className={classes.content}>
				<Card className={classes["welcome-card"]}>
					<h2>Welcome!</h2>
				</Card>
			</div>
		</div>
	);
}

export default App;
