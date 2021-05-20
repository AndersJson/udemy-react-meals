import React from "react";

import classes from "./Button.module.css";

const BUTTON_CLASSES = ["btn--primary", "btn--secondary"];

const Button = (props) => {
	let btnClass;

	if (props.className) {
		btnClass = BUTTON_CLASSES.includes(props.className)
			? props.className
			: "btn--primary";
	} else {
		btnClass = "btn--primary";
	}

	return (
		<button
			className={`${classes.btn} ${classes[btnClass]}`}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
