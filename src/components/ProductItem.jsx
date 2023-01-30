import React from "react";
import { Link } from "react-router-dom";

export const ProductItem = ({ product }) => {
	return (
		<Link to={`/detail/${product.id}`}>
			<div className="product-item">
				<h1>{product.name}</h1>
				<img src={product.colors[0].images[0]} alt={product.name} />
				<p>Price: {product.colors[0].price} $</p>
			</div>
		</Link>
	);
};
