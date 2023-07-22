import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ProductDetails = () => {
	const { id } = useParams();

	const query = useQuery({
		queryKey: ["posts", id],
		queryFn: async () => {
			const response = await axios.get(
				`https://fakestoreapi.com/products/${id}`
			);
			const data = await response.data;
			// console.log(data);
			return data;
		},
	});
	if (query.isLoading) return <h1>Loading....</h1>;
	if (query.isError) return <h1>Error Loading data !!!</h1>;

	const ShowProduct = () => {
		return (
			<>
				<div className="max-w-md mx-auto  rounded-xl  md:max-w-7xl md:mt-8">
					<div className="md:flex md:justify-center md:items-center">
						<div className="md:shrink-0 md:mx-32">
							<img
								className="h-auto w-96 object-cover md:h-full md:w-96"
								src={query.data.image}
								alt={query.data.title}
							/>
						</div>
						<div className="p-8  w-full ">
							<h1 className="uppercase tracking-wide text-2xl text-slate-900 font-semibold">
								{query.data.category}
							</h1>
							<h1 className="block mt-1 font-normal text-5xl leading-tight  text-slate-500 ">
								{query.data.title}
							</h1>
							<h3 className=" font-normal text-4xl p-2">${query.data.price}</h3>

							<p className="mt-2 font-normal text-2xl text-slate-500">
								{query.data.description}
							</p>
						</div>
					</div>
				</div>
			</>
		);
	};
	return (
		<div>
			<div className="container py-5 flex justify-center items-center">
				<div className="row py-4">
					<ShowProduct />
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
