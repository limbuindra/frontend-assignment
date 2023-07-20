import React, { useState, useEffect } from "react";
import axios from "axios";
import Products from "./Products";
const Home = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("https://fakestoreapi.com/products");
				setData(response.data);
				console.log(response.data);
			} catch (error) {
				console.error("Error", error);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<Products data={data} />
		</>
	);
};

export default Home;
