import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import ProductList from "./Components/ProductList";
import Header from "./Components/Header";
import "./App.css";

// Keep the cart placeholder for now
const PlaceholderCart = () => (
	<div>
		<Header />
		<div style={{ padding: "50px", textAlign: "center", color: "black" }}>
			Shopping Cart Page (Coming in Module 5)
		</div>
	</div>
);

const LandingPage = () => {
	return (
		<div className="landing-page">
			<div className="landing-content">
				<h1>Paradise Nursery</h1>
				<AboutUs />
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
				<Route path="/products" element={<ProductList />} />
				<Route path="/cart" element={<PlaceholderCart />} />
			</Routes>
		</Router>
	);
}

export default App;
