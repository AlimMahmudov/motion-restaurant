export const foodItems = [
	// Desserts
	{
		id: 'dess-1a7f-98c3-dc5b-icecreammaster',
		name: 'Ice Cream Master',
		price: 9.11,
		imageSrc: '/fooditems/icecream1.svg',
		ingredients: ['soda', 'cream', 'milk', 'sugar'],
		categoryId: 'desserts-001',
		description:
			'A delightful mix of soda and creamy ice cream topped with your favorite flavors.'
	},
	{
		id: 'dess-2b3d-42e9-a1f8-icecreamhelp',
		name: 'Ice Cream Help',
		price: 10.5,
		imageSrc: '/fooditems/icecream2.svg',
		ingredients: ['soda', 'cream', 'milk', 'sugar'],
		categoryId: 'desserts-001',
		description:
			'Refreshing ice cream blended with fizzy soda for a unique twist.'
	},
	{
		id: 'dess-3e2c-54f7-74c6-icecreamhelping',
		name: 'Ice Cream Helping',
		price: 12.0,
		imageSrc: '/fooditems/icecream3.svg',
		ingredients: ['soda', 'cream', 'milk', 'sugar'],
		categoryId: 'desserts-001',
		description:
			'A generous helping of ice cream and soda for the perfect summer treat.'
	},
	{
		id: 'dess-4f5a-7c1d-1b8e-icecreamdelight',
		name: 'Ice Cream Delight',
		price: 11.25,
		imageSrc: '/fooditems/icecream4.svg',
		ingredients: ['soda', 'cream', 'milk', 'sugar'],
		categoryId: 'desserts-001',
		description: 'A delightful scoop of ice cream served with sparkling soda.'
	},
	{
		id: 'dess-5c8d-91f2-7d6e-icecreamspecial',
		name: 'Ice Cream Special',
		price: 13.75,
		imageSrc: '/fooditems/icecream5.svg',
		ingredients: ['soda', 'cream', 'milk', 'sugar'],
		categoryId: 'desserts-001',
		description:
			'A special blend of ice cream flavors and fizzy soda for a refreshing experience.'
	},
	{
		id: 'dess-6b4e-25f3-4a9b-icecreamultimate',
		name: 'Ice Cream Ultimate',
		price: 14.99,
		imageSrc: '/fooditems/icecream6.svg',
		ingredients: ['soda', 'cream', 'milk', 'sugar'],
		categoryId: 'desserts-001',
		description:
			'The ultimate ice cream treat with multiple layers of flavor and texture.'
	},
	// Hot Drinks
	{
		id: 'drinkhot-7a9d-88f6-9b1c-hotchocolate',
		name: 'Hot Chocolate',
		price: 4.99,
		imageSrc:
			'https://www.foodandwine.com/thmb/V1OEgtLQGUv_w2Fvm40WMLsJ4rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Indulgent-Hot-Chocolate-FT-RECIPE0223-fd36942ef266417ab40440374fc76a15.jpg',
		ingredients: ['cocoa', 'milk', 'sugar', 'whipped cream'],
		categoryId: 'hot-drinks-002',
		description:
			'Rich and creamy hot chocolate topped with fluffy whipped cream.'
	},
	{
		id: 'drinkhot-8e7f-5b7a-6a4e-espresso',
		name: 'Espresso',
		price: 3.5,
		imageSrc:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrjyHlkViXf1t9FlpAnmlozT9DZSvPbFi-Lg&s',
		ingredients: ['coffee beans', 'water'],
		categoryId: 'hot-drinks-002',
		description:
			'A shot of strong and bold espresso, perfect for coffee lovers.'
	},
	// Cold Drinks
	{
		id: 'drinkcold-9c5e-12f3-7e5a-icedlatte',
		name: 'Iced Latte',
		price: 5.25,
		imageSrc:
			'https://anerdcooks.com/wp-content/uploads/2022/10/iced_vanilla_latte7.jpg',
		ingredients: ['espresso', 'milk', 'ice'],
		categoryId: 'cold-drinks-003',
		description:
			'Smooth and refreshing iced latte made with rich espresso and cold milk.'
	},
	{
		id: 'drinkcold-10a2-3f8e-5b7e-lemonade',
		name: 'Lemonade',
		price: 3.99,
		imageSrc:
			'https://mojo.generalmills.com/api/public/content/S3v1myzakEC_8MtBvag4gw_webp_base.webp?v=7cce746c&t=e724eca7b3c24a8aaa6e089ed9e611fd',
		ingredients: ['lemons', 'sugar', 'water'],
		categoryId: 'cold-drinks-003',
		description:
			'Freshly squeezed lemonade with just the right amount of sweetness.'
	},
	// National Foods
	{
		id: 'natfood-11c7-4e3d-9a8f-fruitsalad',
		name: 'Fruit Salad',
		price: 8.0,
		imageSrc:
			'https://www.hipmamasplace.com/wp-content/uploads/2024/06/summer-fruit-salad-enhanced-1440x1152.jpg',
		ingredients: ['mixed fruits', 'honey', 'mint'],
		categoryId: 'national-foods-004',
		description:
			'A vibrant mix of seasonal fruits drizzled with honey and garnished with mint.'
	},
	{
		id: 'natfood-12d8-2a5e-3b9a-pastaprimavera',
		name: 'Pasta Primavera',
		price: 11.0,
		imageSrc:
			'https://dfwblobstorage.blob.core.windows.net/images/Recipe/One-Pot-Shrimp-Pasta-Primavera-wc.jpg',
		ingredients: ['pasta', 'vegetables', 'olive oil'],
		categoryId: 'national-foods-004',
		description:
			'A delightful pasta dish loaded with fresh vegetables and a light olive oil sauce.'
	},
	// Eastern Cuisine
	{
		id: 'eastfood-13a9-9f7c-4b8e-falafel',
		name: 'Falafel',
		price: 6.5,
		imageSrc:
			'https://thenewbaguette.com/wp-content/uploads/2022/09/falafel-patties.jpg',
		ingredients: ['chickpeas', 'spices', 'herbs'],
		categoryId: 'eastern-cuisine-005',
		description:
			'Crispy falafel patties made from chickpeas and spices, served with tahini.'
	},
	{
		id: 'eastfood-14c3-8d2e-5f6b-shawarma',
		name: 'Shawarma',
		price: 9.99,
		imageSrc: 'https://recipe30.com/wp-content/uploads/2022/07/Shawarma.jpg',
		ingredients: ['meat', 'pita bread', 'vegetables', 'sauce'],
		categoryId: 'eastern-cuisine-005',
		description:
			'Succulent shawarma wrapped in warm pita bread with fresh vegetables and sauce.'
	},
	{
		id: 'eastfood-15f8-3e7b-2a4d-hummus',
		name: 'Hummus',
		price: 5.5,
		imageSrc:
			'https://www.allrecipes.com/thmb/Ltz5ZZ15Tx9CnEHjUr54gMswdSA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/232962-super-easy-hummus-ddmfs-1X2-0316-bf44d147efde4432b6f3b4a0c251ac06.jpg',
		ingredients: ['chickpeas', 'tahini', 'garlic', 'lemon'],
		categoryId: 'eastern-cuisine-005',
		description:
			'Smooth and creamy hummus made from chickpeas, tahini, and lemon, served with pita.'
	},
	// Fast Foods
	{
		id: 'fastfood-16d2-8a7b-3e1c-burger',
		name: 'Burger',
		price: 8.5,
		imageSrc:
			'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
		ingredients: ['beef patty', 'cheese', 'lettuce', 'tomato'],
		categoryId: 'fast-foods-006',
		description:
			'Juicy beef burger topped with melted cheese, lettuce, and fresh tomato.'
	},
	{
		id: 'fastfood-17e5-4b3e-1c5d-frenchfries',
		name: 'French Fries',
		price: 3.5,
		imageSrc:
			'https://www.budgetbytes.com/wp-content/uploads/2023/12/air-fryer-french-fries-horizontal-hero-web-ready-1.jpg',
		ingredients: ['potatoes', 'salt'],
		categoryId: 'fast-foods-006',
		description: 'Crispy golden French fries, perfectly salted and served hot.'
	},
	{
		id: 'fastfood-18f4-6a2d-7e8c-chickennuggets',
		name: 'Chicken Nuggets',
		price: 5.99,
		imageSrc:
			'https://www.allrecipes.com/thmb/DOhcP7hAGP_ams-a-M8A-16TeK4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-161469-the-best-ever-chicken-nuggets-DDMFS-4x3-e0f5af0ce26241d888967904f66962c7.jpg',
		ingredients: ['chicken', 'bread crumbs', 'spices'],
		categoryId: 'fast-foods-006',
		description:
			'Crispy chicken nuggets, seasoned and breaded to perfection, served with your choice of sauce.'
	}
]
