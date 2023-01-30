import React from "react";

export const ColorItem = ({ color, setCurrentColor }) => {
	return (
		<button className="color" onClick={() => setCurrentColor(color.id)}>
			{color.name}
		</button>
	);
};
