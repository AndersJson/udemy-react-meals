import React from "react";

const CartContext = React.createContext({
	count: 0,
	price: 0,
	items: [],
});

export default CartContext;
