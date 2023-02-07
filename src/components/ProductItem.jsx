import React from "react";
import { Link } from "react-router-dom";

export const ProductItem = ({ product }) => {
	return (
		<Link to={`/detail/${product.id}`}>
			<div className="product-item">
				<img src={product.colors[0].images[0]} alt={product.name} />
				<h1>{product.name.toUpperCase()}</h1>
				<p>{product.colors[0].price} UAH</p>
			</div>
		</Link>
	);
};
