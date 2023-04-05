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
		<div className="flex w-screen h-24 bg-[url(C:\Users\RYZEN\Desktop\rick_and_morty_v2\front\src\img\Rick_and_Morty.svg.png)] bg-[length:300px_95px] bg-no-repeat pb-1">
			<div className="flex w-full gap-5 flex-wrap justify-between px-6 text-lg text-azul drop-shadow-[2px_2px_rgba(0,0,0,1)] items-end py-2">
				<div />
				<Link to="/home" className="hover:text-gray-500 text-2xl font-bold font-serif ">
					Home
				</Link>

				<Link to="/favorites" className=" hover:text-gray-500 text-2xl font-bold font-serif">
					Favorites
				</Link>

				<Link to="/about" className=" hover:text-gray-500 text-2xl font-bold font-serif">
					About
				</Link>

				<SearchBar onSearch={onSearch} />
			</div>
		</div>
	);
};

export default NavBar;
