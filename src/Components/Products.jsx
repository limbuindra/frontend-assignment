import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { useDispatch } from "react-redux";
import { addItem } from "../Redux/actions";

const Products = () => {
	const dispatch = useDispatch();
	const addProduct = (product) => {
		dispatch(addItem(product));
	};

	const postQuery = useQuery({
		queryKey: ["posts"],
		queryFn: async () => {
			const response = await axios.get("https://fakestoreapi.com/products");
			const data = await response.data;
			// console.log(data);
			return data;
		},
	});
	console.log(postQuery.data);
	if (postQuery.isLoading) return <h1>Loading....</h1>;
	if (postQuery.isError) return <h1>Error Loading data !!!</h1>;
	return (
		<>
			<div className="grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3  md:gap-3  lg:grid-cols-4 lg:gap-6 mt-6 m-4 lg:m-6">
				{postQuery.data.map((product) => {
					const { id, image, title, price } = product;
					return (
						<>
							<div>
								<ul>
									<li
										key={id}
										className="border-2 text-lg shadow-xl  rounded-md p-8 m-2 text-center "
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

export default Products;
