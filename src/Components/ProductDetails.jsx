import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";
const ProductDetails = () => {
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(false);

	

	useEffect(() => {
		const getProduct = async () => {
			try{

				setLoading(true);
				const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
				setProduct(response.data);
                console.log(response.data)
				setLoading(false);
			}catch(error){
				console.log("error",error)
			}
		};
		getProduct();
	}, []);

	const Loading = () => {
		return (
			<>
				Loading....
			</>
		);
	};

	const ShowProduct = () => {
		return (
			<>
				<div className="max-w-md mx-auto  rounded-xl  md:max-w-7xl md:mt-8">
					<div className="md:flex md:justify-center md:items-center">
						<div className="md:shrink-0 md:mx-32">
							<img
								className="h-auto w-96 object-cover md:h-full md:w-96"
								src={product.image}
								alt={product.title}
							/>
						</div>
						<div className="p-8  w-full ">
							<h1 className="uppercase tracking-wide text-2xl text-slate-900 font-semibold">
								{product.category}
							</h1>
							<h1 className="block mt-1 font-normal text-5xl leading-tight  text-slate-500 ">
								{product.title}
							</h1>
							<h3 className=" font-normal text-4xl p-2">${product.price}</h3>

							<p className="mt-2 font-normal text-2xl text-slate-500">
								{product.description}
							</p>
							<div className="border border-slate-500 p-2 mt-6 w-32 rounded-md cursor-pointer hover:bg-slate-900 hover:text-white">
								<Link to="/">Go to Products</Link>
							</div>
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
					{loading ? <Loading /> : <ShowProduct />}
				</div>

			</div>
		</div>
	);
};

export default ProductDetails;
