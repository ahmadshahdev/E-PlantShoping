import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Redux/CartSlice";
import { plantsData } from "../plantdata";
import Header from "./Header";
import "./ProductList.css";

const ProductList = () => {
	const dispatch = useDispatch();

	// Bring in the cart items so we can check if a plant is already added
	const cartItems = useSelector((state) => state.cart.items);

	const handleAddToCart = (plant) => {
		dispatch(addItem(plant));
	};

	return (
		<div className="product-list-page">
			<Header />

			<div className="products-container">
				{plantsData.map((group, index) => (
					<div key={index} className="category-section">
						<h2 className="category-title">{group.category}</h2>

						<div className="product-grid">
							{group.plants.map((plant) => {
								// Check if this specific plant name exists in our Redux cart array
								const isAdded = cartItems.some(
									(item) => item.name === plant.name,
								);

								return (
									<div
										key={plant.id}
										className="product-card"
									>
										<div className="image-container">
											<img
												src={plant.image}
												alt={plant.name}
												className="product-image"
											/>
										</div>
										<div className="product-info">
											<h3 className="product-name">
												{plant.name}
											</h3>
											<p className="product-price">
												${plant.price}
											</p>
											<button
												className={`add-to-cart-btn ${isAdded ? "added" : ""}`}
												onClick={() =>
													handleAddToCart(plant)
												}
												disabled={isAdded}
											>
												{isAdded
													? "Added to Cart"
													: "Add to Cart"}
											</button>
										</div>
									</div>
								);
							})}
						</div>

						{/* Divider line between categories except for the last one */}
						{index !== plantsData.length - 1 && (
							<hr className="category-divider" />
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductList;
