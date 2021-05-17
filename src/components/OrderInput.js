import React from "react";

import classes from "./OrderInput.module.css";

const OrderInput = (props) => {
	return (
		<div>
			<label
				className={classes["order-input__label"]}
				htmlFor={`${props.id}-input`}
			>
				Amount:
			</label>
			<input
				className={classes["order-input"]}
				id={`${props.id}-input`}
				onChange={props.inputHandler}
				type="number"
			/>
		</div>
	);
};

export default OrderInput;
