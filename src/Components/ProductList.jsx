// ProductList.jsx (structure)
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Redux/CartSlice";
import { plantsData } from "../plantdata";
import Header from "./Header";
import "./ProductList.css";

const ProductList = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.items);

	const handleAddToCart = (plant) => {
		dispatch(addItem(plant));
	};

	return (
		<div className="product-page">
			<Header />
			<div className="main-content elevated-panel">
				{plantsData.map((group, index) => (
					<div key={index} className="category-section">
						<h2 className="category-title accent-moss">
							{group.category} Collection
						</h2>
						<div className="product-grid responsive-grid">
							{group.plants.map((plant) => {
								const isAdded = cartItems.some(
									(item) => item.name === plant.name,
								);
								return (
									<div
										key={plant.id}
										className="professional-card"
									>
										<div className="card-image-container">
											<img
												src={plant.image}
												alt={plant.name}
												className="card-image"
											/>
										</div>
										<div className="card-info">
											<h3 className="card-name">
												{plant.name}
											</h3>
											<p className="card-price highlight-price">
												${plant.price}
											</p>
											<button
												className={`btn-add ${isAdded ? "added" : ""}`}
												onClick={() =>
													handleAddToCart(plant)
												}
												disabled={isAdded}
											>
												{isAdded
													? "Added"
													: "Add to Cart"}
											</button>
										</div>
									</div>
								);
							})}
						</div>
						{index !== plantsData.length - 1 && (
							<hr className="divider" />
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductList;
