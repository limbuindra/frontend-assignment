import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav className="sticky top-0 shadow-md bg-slate-400">
				<ul className="flex justify-start items-center p-4 space-x-8">
					<li>
						<Link to="/" className="font-bold">Home</Link>
					</li>

					<li>
						<Link to="/search">Search</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
