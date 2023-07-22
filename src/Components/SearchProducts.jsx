import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/actions";

const SearchProducts = () => {
	const [search, setSearch] = useState("");
	const dispatch =  useDispatch();
	const addProduct = (product)=>{
	  dispatch(addItem(product));
	}

	const Query = useQuery({
		queryKey: ["products",search],
		queryFn: async () => {
			if(!search) return [];
			const response = await axios.get(
				`https://fakestoreapi.com/products`
			);
			const data = await response.data;
			return data;
		},
	});
	

	const handleSearchSubmit = (query) => {
		setSearch(query);
	};
	return (
		<>
			<Searchbar onSubmit={handleSearchSubmit} />
			<div className="grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3  md:gap-3  lg:grid-cols-4 lg:gap-4 mt-8">
				{search && Query.data?.filter((product) => {
					if (search ==='' ) {
						return [];
					} else if (
						product.title.toLowerCase().includes(search.toLowerCase())
					) {
						return [];
					}
				}).map((product) => {
					const { id, image, title, price } = product;
					return (
						<>
							<div>
								<ul>
									<li
										key={id}
										className="border-2 text-lg shadow-xl  rounded-md p-8 m-6 text-center"
									>
										<Link to={`/products/${id}`}>
											<img className="h-72 w-60" src={image} alt="" />

											<p className="mt-2 text-xl">
												{title.substring(0, 20)}...
											</p>
											<div>
												<p className="font-bold text-lg">
													${Math.round(price)}
												</p>
											</div>
										</Link>
										<div>
											<button
												className="border border-slate-500 mx-auto p-2 m-3 w-32 rounded-md cursor-pointer"
												onClick={() => addProduct(product)}
											>
												Add to Cart
											</button>
										</div>
									</li>
								</ul>
							</div>
						</>
					);
				})}
			</div>
		</>
	);
};

export default SearchProducts;
