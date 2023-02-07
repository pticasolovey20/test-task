import React from "react";

export const SizeComponent = ({ product, currentColor, sizes }) => {
	return (
		<div className="size-component">
			{sizes.length > 0 &&
				sizes.map((size, index) => (
					<button
						key={index}
						className="size-item"
						disabled={
							product.colors[currentColor - 1].sizes.find(
								(availible) => availible === size.id
							)
								? false
								: true
						}
					>
						{size.label}
					</button>
				))}
		</div>
	);
};
