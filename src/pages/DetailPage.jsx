import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ColorItem } from "../components/ColorItem";
import { SizeItem } from "../components/SizeItem";
import { getProduct, getSizes } from "../services/api";

export const DetailPage = () => {
	const [product, setProduct] = useState({});
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
					<div className="left">
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
					<div className="right">
						<div className="description">
							<h1>{product.name}</h1>
							<span>
								{`Описание: ${product.colors[currentColor - 1].description.slice(
									12
								)}`}
							</span>
							<p>Цена: {product.colors[currentColor - 1].price} $</p>
						</div>
						<div className="colors">
							{product.colors.map((color) => (
								<ColorItem
									key={color.id}
									color={color}
									setCurrentColor={setCurrentColor}
								/>
							))}
						</div>
						<div className="size-wrapper">
							{sizes.length > 0 &&
								sizes.map((size) => (
									<SizeItem
										key={size.id}
										size={size}
										isAvaliable={product.colors[currentColor - 1].sizes.find(
											(availible) => availible === size.id
										)}
									/>
								))}
						</div>
					</div>
				</div>
			)}
		</>
	);
};
