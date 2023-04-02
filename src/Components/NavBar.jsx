import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router-dom";

const NavBar = (props) => {
    const { onSearch } = props;
	const location = useLocation();

	if(location.pathname === "/"){
		return null;
	}

	return (
		<div className="flex w-screen h-24 bg-[url(C:\Users\RYZEN\Desktop\rick_and_morty_v2\front\src\img\Rick_and_Morty.svg.png)] bg-[length:300px_120px] bg-left bg-no-repeat  bg-amarilloNav shadow-lg absolute pb-1">
			<div className="flex w-full gap-6 flex-wrap justify-between px-6 text-lg text-azul drop-shadow-[1.2px_1.2px_rgba(0,0,0,0.8)] items-end py-2">
				<div />
				<Link to="/home" className="hover:text-gray-500 text-2xl">
					Home
				</Link>

				<Link to="/favorites" className=" hover:text-gray-500 text-2xl">
					Favorites
				</Link>

				<Link to="/about" className=" hover:text-gray-500 text-2xl">
					About
				</Link>

				<SearchBar onSearch={onSearch}/>
			</div>
		</div>
	);
};

export default NavBar;
