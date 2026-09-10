import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import ProductList from "./Components/ProductList";
import CartItem from "./Components/CartItem";
import "./App.css";

const LandingPage = () => {
	return (
		<div className="landing-page">
			<div className="landing-content">
				<h1>
					Paradise <span>Nursery</span>
				</h1>
				<hr className="title-divider" />
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
		<Router basename="/E-PlantShoping">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/products" element={<ProductList />} />
				<Route path="/cart" element={<CartItem />} />
			</Routes>
		</Router>
	);
}

export default App;
