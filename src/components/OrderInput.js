import React, { Fragment } from "react";

import classes from "./OrderInput.module.css";

const OrderInput = (props) => {
	return (
		<Fragment>
			<label
				className={classes["order-input__label"]}
				htmlFor={`${props.id}-input`}
			>
				Amount:
			</label>
			<input
				className={classes["order-input"]}
				id={`${props.id}-input`}
				type="number"
			/>
		</Fragment>
	);
};

export default OrderInput;
