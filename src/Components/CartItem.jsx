import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity } from "../Redux/CartSlice";
import Header from "./Header";
import "./CartItem.css";

const CartItem = () => {
	const cartItems = useSelector((state) => state.cart.items);
	const dispatch = useDispatch();

	// Calculate Total Amount
	const calculateTotalAmount = () => {
		return cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0,
		);
	};

	// Calculate Total Quantity for the header summary
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
			// If quantity drops below 1, remove the item entirely
			dispatch(removeItem(item.name));
		}
	};

	const handleRemove = (item) => {
		dispatch(removeItem(item.name));
	};

	const handleCheckout = () => {
		alert("Checkout Functionality Coming Soon!");
	};

	return (
		<div className="cart-page">
			<Header />

			<div className="cart-container">
				<h2 className="cart-title">Your Cart</h2>

				{cartItems.length === 0 ? (
					<div className="empty-cart">
						<p>Your cart is currently empty.</p>
						<Link to="/products">
							<button className="continue-shopping-btn">
								Continue Shopping
							</button>
						</Link>
					</div>
				) : (
					<>
						<div className="cart-summary-top">
							<p>
								Total Items:{" "}
								<strong>{calculateTotalItems()}</strong>
							</p>
							<p>
								Total Amount:{" "}
								<strong>${calculateTotalAmount()}</strong>
							</p>
						</div>

						<div className="cart-items-list">
							{cartItems.map((item, index) => (
								<div className="cart-item-card" key={index}>
									<img
										src={item.image}
										alt={item.name}
										className="cart-item-image"
									/>

									<div className="cart-item-details">
										<h3 className="cart-item-name">
											{item.name}
										</h3>
										<p className="cart-item-price">
											Unit Price: ${item.price}
										</p>
										<p className="cart-item-subtotal">
											Subtotal: $
											{item.price * item.quantity}
										</p>

										<div className="cart-item-controls">
											<div className="quantity-controls">
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
												className="delete-btn"
												onClick={() =>
													handleRemove(item)
												}
											>
												Delete
											</button>
										</div>
									</div>
								</div>
							))}
						</div>

						<div className="cart-actions-bottom">
							<Link to="/products">
								<button className="continue-shopping-btn">
									Continue Shopping
								</button>
							</Link>
							<button
								className="checkout-btn"
								onClick={handleCheckout}
							>
								Checkout
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default CartItem;
