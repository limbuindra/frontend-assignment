import React from "react";
import Products from "./Products";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
	return (
		<>
			<Products />
		</>
	);
};

export default Home;
