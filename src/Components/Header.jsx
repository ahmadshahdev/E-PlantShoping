import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
	const cartItems = useSelector((state) => state.cart.items);

	// Dynamically calculate the total number of items
	const totalQuantity = cartItems.reduce(
		(total, item) => total + item.quantity,
		0,
	);

	return (
		<nav className="navbar">
			<div className="nav-brand">
				<Link to="/" className="brand-link">
					<strong>Paradise Nursery</strong>
				</Link>
			</div>

			<div className="nav-links">
				<Link to="/products" className="nav-link">
					Plants
				</Link>

				<Link to="/cart" className="cart-container">
					{/* SVG Cart Icon */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<circle cx="9" cy="21" r="1"></circle>
						<circle cx="20" cy="21" r="1"></circle>
						<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
					</svg>

					{/* Dynamic Cart Badge */}
					<span className="cart-badge">{totalQuantity}</span>
				</Link>
			</div>
		</nav>
	);
};

export default Header;
