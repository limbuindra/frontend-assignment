import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { delItem } from "../Redux/actions";
import { Link } from "react-router-dom";
import { BsX } from "react-icons/bs";

const Cart = () => {
	const state = useSelector((state) => state.addItem);
	const dispatch = useDispatch();

	const handleClose = (item) => {
		dispatch(delItem(item));
	};

	const cartItems = (product) => {
		return (
			<div key={product.id}>
				<div className=" flex flex-col mt-8 m-8">
					<ul>

					<li className=" border-2  border-slate-300 focus:ring focus:ring-blue-300 rounded-md p-2 m-2 ">

						<div className="flex justify-between items-center">
						<img class="h-14 w-14 " src={product.image} alt="" />
						    <p>{product.title}</p>
							<p className="font-bold"> {product.category}</p>
							<p className="font-normal ">${Math.round(product.price)}</p>
					<button className="mb-9" onClick={() => handleClose(product)}>
						<BsX className="text-3xl " />
					</button>
						</div>

					</li>
					</ul>
				</div>
			</div>
			
		);
	};
	const emptyCart = () => {
		return (
			<div className=" py-4 flex justify-center items-center">
				<div className="text-4xl text-center ">
					<h3>Your Cart is Empty</h3>
				</div>
			</div>
		);
	};

	return (
		<>
			{state.length === 0 && emptyCart()}
			{state.length !== 0 && state.map(cartItems)}
			<div className="border flex justify-center items-center mx-auto border-slate-500 p-2 mt-6 w-32 rounded-md cursor-pointer hover:bg-slate-900 hover:text-white">
				<Link to="/">Go to Products</Link>
			</div>
		</>
	);
};

export default Cart;
