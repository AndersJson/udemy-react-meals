import React, { useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";

import classes from "./MenuItemForm.module.css";

const MenuItemForm = (props) => {
	const amountInputRef = useRef();
	const [amountIsValid, setAmountIsValid] = useState(true);

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;

		if (
			enteredAmount.trim().length === 0 ||
			enteredAmountNumber < 1 ||
			enteredAmountNumber > 5
		) {
			setAmountIsValid(false);
			return;
		}
		props.onAddToCart(enteredAmountNumber);
	};

	return (
		<form className={classes["food-menu__form"]} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
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
			{!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
		</form>
	);
};

export default MenuItemForm;
