import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import "./App.css";

const PlaceholderProducts = () => (
	<div style={{ padding: "50px" }}>
		Product Listing Page (Coming in Module 4)
	</div>
);
const PlaceholderCart = () => (
	<div style={{ padding: "50px" }}>
		Shopping Cart Page (Coming in Module 5)
	</div>
);

const LandingPage = () => {
	return (
		<div className="landing-page">
			<div className="landing-content">
				{/* Company Name */}
				<h1>Paradise Nursery</h1>

				{/* Paragraph about the company */}
				<AboutUs />

				{/* Get Started button linking to product page */}
				<Link to="/products">
					<button className="get-started-btn">Get Started</button>
				</Link>
			</div>
		</div>
	);
};

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/products" element={<PlaceholderProducts />} />
				<Route path="/cart" element={<PlaceholderCart />} />
			</Routes>
		</Router>
	);
}
export default App;
