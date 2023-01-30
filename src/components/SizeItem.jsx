import React from "react";

export const SizeItem = ({ size, isAvaliable }) => {
	return (
		<button className="size" disabled={isAvaliable ? false : true}>
			{size.label}
		</button>
	);
};
