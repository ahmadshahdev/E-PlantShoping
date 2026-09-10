// CartItem.jsx (Revised structure)
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../Redux/CartSlice";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import "./CartItem.css";

const CartItem = () => {
	const cartItems = useSelector((state) => state.cart.items);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const calculateTotalAmount = () => {
		return cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0,
		);
	};

	const calculateTotalItems = () => {
		return cartItems.reduce((total, item) => total + item.quantity, 0);
	};

	const handleIncrement = (item) => {
		dispatch(
			updateQuantity({ name: item.name, quantity: item.quantity + 1 }),
		);
	};

	const handleDecrement = (item) => {
		if (item.quantity > 1) {
			dispatch(
				updateQuantity({
					name: item.name,
					quantity: item.quantity - 1,
				}),
			);
		} else {
			dispatch(removeItem(item.name));
		}
	};

	const handleRemove = (item) => {
		dispatch(removeItem(item.name));
	};

	return (
		<div className="cart-page">
			<Header />
			<div className="main-content elevated-panel cart-dashboard">
				<h2 className="dashboard-title accent-moss">
					Your Shopping Cart Summary
				</h2>

				{cartItems.length === 0 ? (
					<div className="empty-state">
						<p>Your cart is empty.</p>
						<Link
							to="/products"
							className="btn-continue secondary-outline"
						>
							Back to Plants
						</Link>
					</div>
				) : (
					<div className="cart-content-layout">
						{/* Left: Cart Items List */}
						<div className="cart-list">
							{cartItems.map((item) => (
								<div
									className="cart-item-row professional-row"
									key={item.name}
								>
									<img
										src={item.image}
										alt={item.name}
										className="cart-row-image"
									/>

									<div className="cart-row-details">
										<h3 className="row-name">
											{item.name}
										</h3>
										<p className="row-price">
											Unit Price: ${item.price}
										</p>
										<p className="row-subtotal highlight-cost">
											Subtotal: $
											{item.price * item.quantity}
										</p>
									</div>

									<div className="cart-row-controls">
										<div className="quantity-controls-block">
											<button
												className="qty-btn"
												onClick={() =>
													handleDecrement(item)
												}
											>
												-
											</button>
											<span className="qty-display">
												{item.quantity}
											</span>
											<button
												className="qty-btn"
												onClick={() =>
													handleIncrement(item)
												}
											>
												+
											</button>
										</div>
										<button
											className="btn-delete"
											onClick={() =>
												handleRemove(item)
											} /* Red delete icon */
										/>
									</div>
								</div>
							))}
						</div>

						{/* Right: Integrated Summary Card */}
						<div className="cart-summary professional-card-fixed accent-card">
							<h3>Order Summary</h3>
							<div className="summary-list">
								<div className="summary-item">
									<p>Total Items:</p>{" "}
									<strong>{calculateTotalItems()}</strong>
								</div>
								<div className="summary-item">
									<p>Total Cost:</p>{" "}
									<strong className="highlight-cost">
										${calculateTotalAmount()}
									</strong>
								</div>
							</div>
							<div className="summary-actions">
								<button
									className="btn-continue secondary-outline"
									onClick={() => navigate("/products")}
								>
									Continue Shopping
								</button>
								<button
									className="btn-checkout primary-fill" /* Shows "Coming Soon" */
								>
									Checkout
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default CartItem;
