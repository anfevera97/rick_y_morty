import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router-dom";

const NavBar = (props) => {
	const { onSearch } = props;
	const location = useLocation();

	if (location.pathname === "/") {
		return null;
	}

	return (
		<div className="flex w-screen h-14 pb-1">
			<div className="flex w-full justify-start gap-80 ml-7 text-lg text-azul drop-shadow-[2px_2px_rgba(0,0,0,1)] items-end">
				
				<Link to="/home" className="hover:text-gray-500 text-xl font-bold font-serif ">
					Home
				</Link>

				<Link to="/favorites" className=" hover:text-gray-500 text-xl font-bold font-serif">
					Favorites
				</Link>

				<Link to="/about" className=" hover:text-gray-500 text-xl font-bold font-serif">
					About
				</Link>
			</div>
			<div className="flex items-end mr-8 drop-shadow-[2px_2px_rgba(0,0,0,1)]">
			<SearchBar onSearch={onSearch} />
			</div>
		</div>
	);
};

export default NavBar;
