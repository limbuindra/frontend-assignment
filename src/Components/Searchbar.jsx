import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Searchbar = ({ onSubmit }) => {
	const [search, setSearch] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(search);
	};
	return (
		<>
			<div className="flex justify-center items-center space-x-8 ">
				<form
					onSubmit={handleSubmit}
					className="  border-2 rounded-full mt-4 mx-4  flex justify-center items-center shadow-md font-medium bg-white focus:outline-none focus:ring focus:ring-violet-300 p-1 "
				>
					<BsSearch />
					<input
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						type="search"
						name="search"
						id="search"
						className="cursor-text w-full lg:w-96 md:w-full text-lg px-2 py-1 focus:outline-none    block"
						placeholder="Search...."
						autoComplete="off"
					/>
					<button onClick={(e) => handleSubmit(e)} className=" bg-gray-400 text-white text-lg px-5 rounded-full py-2">
						
						Search
					</button>
				</form>
			</div>
		</>
	);
};

export default Searchbar;
