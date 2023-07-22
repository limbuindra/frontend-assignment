import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ProductDetails from "./Components/ProductDetails";
import SearchProducts from "./Components/SearchProducts";
import Cart from "./Components/Cart";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products/:id" element={<ProductDetails />} />

				<Route path="/search" element={<SearchProducts />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</>
	);
}

export default App;
