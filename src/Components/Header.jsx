// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
	const cartItems = useSelector((state) => state.cart.items);
	const totalQuantity = cartItems.reduce(
		(total, item) => total + item.quantity,
		0,
	);

	return (
		<nav className="navbar professional-shadow sticky-nav">
			<div className="nav-container">
				<Link to="/" className="brand-link">
					<strong>Paradise Nursery</strong>
				</Link>
				<div className="nav-links">
					
					<Link to="/cart" className="cart-link-unit">
						{/* The stroke="currentColor" makes the icon white */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
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
						<span className="cart-badge dynamic-badge">
							{totalQuantity}
						</span>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Header;
