import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ColorsComponent } from "../components/ColorsComponent";
import { SizeComponent } from "../components/SizeComponent";
import { getProduct, getSizes } from "../services/api";

export const DetailPage = () => {
	const [product, setProduct] = useState([]);
	const [sizes, setSizes] = useState(null);
	const [currentColor, setCurrentColor] = useState(1);
	const [currentImage, setCurrentImage] = useState(0);

	const { id } = useParams();

	useEffect(() => {
		getProduct(id).then((data) => setProduct(data));
		getSizes().then((data) => setSizes(data));
	}, [id, currentColor, currentImage]);

	return (
		<>
			{Object.keys(product).length > 0 && (
				<div className="detail-product">
					<div className="left-side">
						<div className="small-images">
							{product.colors[currentColor - 1].images.map((image, index) => (
								<img
									key={index}
									onClick={() => setCurrentImage(index)}
									src={product.colors[currentColor - 1].images[index]}
									alt={product.name}
								/>
							))}
						</div>
						<div className="big-image">
							<img
								src={product.colors[currentColor - 1].images[currentImage]}
								alt={product.name}
							/>
						</div>
					</div>
					<div className="right-side">
						<div className="description">
							<h1>{product.name.toUpperCase()}</h1>
							<p>PRICE: {product.colors[currentColor - 1].price} UAH</p>
						</div>
						<ColorsComponent product={product} setCurrentColor={setCurrentColor} />
						<SizeComponent
							product={product}
							currentColor={currentColor}
							sizes={sizes}
						/>
					</div>
				</div>
			)}
		</>
	);
};
