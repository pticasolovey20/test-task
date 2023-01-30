import React, { useEffect, useState } from "react";
import { ProductItem } from "../components/ProductItem";
import { getProducts } from "../services/api";

export const Home = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts().then((data) => setProducts(data));
	}, []);

	return (
		<div className="home-page">
			{products.length > 0 &&
				products.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
		</div>
	);
};
