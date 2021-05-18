import React from "react";
import Button from "./Button";
import Input from "./Input";

import classes from "./MenuItemForm.module.css";

const MenuItemForm = (props) => {
	return (
		<form className={classes["food-menu__form"]}>
			<Input
				label="Amount: "
				input={{
					type: "number",
					min: "1",
					max: "10",
					step: "1",
					defaultValue: "1",
					id: `amount_${props.id}`,
				}}
			/>
			<Button>+ Add</Button>
		</form>
	);
};

export default MenuItemForm;
