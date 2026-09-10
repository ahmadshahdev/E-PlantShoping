// 1. Import your images at the top.
// Make sure to add the correct file extensions (.jpg, .png, etc.)
import plant1 from "./assets/plant-1.jpg";
import plant2 from "./assets/plant-2.jpg";
import plant3 from "./assets/plant-3.jpg";
import plant4 from "./assets/plant-4.jpg";
import plant5 from "./assets/plant-5.jpg";
import plant6 from "./assets/plant-6.jpg";

export const plantsData = [
	{
		category: "Air Purifying",
		plants: [
			{
				id: 1,
				name: "Snake Plant",
				price: 15,
				// 2. Use the imported variable name here (no quotes!)
				image: plant1,
			},
			{
				id: 2,
				name: "Spider Plant",
				price: 12,
				image: plant2,
			},
		],
	},
	{
		category: "Low Light Tolerance",
		plants: [
			{
				id: 3,
				name: "ZZ Plant",
				price: 18,
				image: plant3,
			},
			{
				id: 4,
				name: "Pothos",
				price: 10,
				// You can still mix external URLs with local imports
				image: plant4,
			},
		],
	},
	{
		category: "Pet Friendly",
		plants: [
			{
				id: 5,
				name: "Boston Fern",
				price: 14,
				image: plant5,
			},
			{
				id: 6,
				name: "Parlor Palm",
				price: 22,
				image: plant6,
			},
		],
	},
];
