import React from "react";

import classes from "./ModalWrapper.module.css";

const ModalWrapper = (props) => {
	if (props.show === true) {
		return (
			<div
				className={classes["cart-modal--overlay"]}
				onClick={props.overlayClickHandler}
			>
				{props.children}
			</div>
		);
	} else {
		return "";
	}
};

export default ModalWrapper;
