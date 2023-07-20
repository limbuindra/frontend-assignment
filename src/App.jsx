import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import ProductDetails from "./Components/ProductDetails";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products/:id" element={<ProductDetails />} />

				<Route path="/search" element={<Searchbar />} />
			</Routes>
		</>
	);
}

export default App;
