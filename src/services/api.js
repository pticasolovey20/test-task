const sizes = [
	{ id: 1, label: "XS", number: 44 },
	{ id: 2, label: "S", number: 46 },
	{ id: 3, label: "M", number: 48 },
	{ id: 4, label: "L", number: 50 },
	{ id: 5, label: "XL", number: 52 },
];

const products = [
	{
		id: 1,
		name: "T-shirt",
		colors: [
			{
				id: 1,
				name: "черный",
				images: ["/images/1/black_front.png", "/images/1/black_back.png"],
				price: "123.00",
				description: 'Описание для "Футболка черная"',
				sizes: [1, 2, 3],
			},
			{
				id: 2,
				name: "белый",
				images: ["/images/1/white_front.png", "/images/1/white_back.png"],
				price: "125.00",
				description: 'Описание для "Футболка белая"',
				sizes: [1, 2, 3, 4, 5],
			},
			{
				id: 3,
				name: "серый",
				images: ["/images/1/gray_front.png", "/images/1/gray_back.png"],
				price: "120.00",
				description: 'Описание для "Футболка серая"',
				sizes: [],
			},
		],
	},

	{
		id: 2,
		name: "Sweatshirt",
		colors: [
			{
				id: 1,
				name: "желтый",
				images: ["/images/2/yellow_front.png", "/images/2/yellow_back.png"],
				price: "88.00",
				description: 'Описание для "Майка желтая"',
				sizes: [1, 2, 3, 4, 5],
			},
			{
				id: 2,
				name: "синий",
				images: ["/images/2/blue_front.png", "/images/2/blue_back.png"],
				price: "89.00",
				description: 'Описание для "Майка синяя"',
				sizes: [2],
			},
			{
				id: 3,
				name: "черный",
				images: ["/images/2/black_front.png", "/images/2/black_back.png"],
				price: "90.00",
				description: 'Описание для "Майка черная"',
				sizes: [],
			},
		],
	},
];

export function getSizes() {
	return new Promise((resolve) => {
		return setTimeout(() => resolve(sizes), 250);
	});
}

export function getProducts() {
	return new Promise((resolve) => {
		setTimeout(() => resolve(products), 250);
	});
}

export function getProduct(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const product = products.find((product) => product.id === Number(id));
			if (product) {
				resolve(product);
			} else {
				reject(new Error("Product not found"));
			}
		}, 250);
	});
}
