import React from "react";

export const ColorsComponent = ({ product, setCurrentColor }) => {
	return (
		<div className="colors-component">
			{product.colors.map((color, index) => (
				<button key={index} onClick={() => setCurrentColor(color.id)}>
					{color.name}
				</button>
			))}
		</div>
	);
};
