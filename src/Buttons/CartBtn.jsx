import React from "react";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux/es/hooks/useSelector";

const CartBtn = () => {
	  const state = useSelector((state) => state.addItem)
	return (
		<>
			<Link
				to="/cart"
				className="flex justify-center items-center  mx-4 px-4 text-white hover:bg-slate-400 hover:text-white focus:ouline-none focus:ring focus:ring-gray-900  rounded-xl "
			>
				<BsCart className="text-white text-xl m-2 "/> <span className="  text-xl font-medium  ">Cart</span>
				({state.length})
			</Link>
		</>
	);
};

export default CartBtn;
