import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ id, detailId, name, species, gender, status, image, onClose }) => {
	return (
		<div className="bg-gray-900 w-max h-max mx-3 rounded-xl relative hover:shadow-2xl mt-3 p-1">
			<button
				onClick={onClose}
				className="h-auto w-[25px] rounded text-black bg-gray-500 hover:text-red-700 hover:bg-transparent float-right"
			>
				X
			</button>
			<div className="text-xl font-sans flex justify-around content-fit text-verde drop-shadow-[1.2px_1.2px_rgba(0,0,0,0.8)]">
				<h2>{species}</h2>
				<h2>{gender}</h2>
			</div>

			<NavLink to={`/detail/${detailId}`}>
			<div className="relative">
				<img src={image} alt={name} className="rounded-xl m-1" />
				<h2 className="text-4xl text-azul bg-amarilloName rounded-lg absolute bottom-2 drop-shadow-[1.2px_1.2px_rgba(0,0,0,0.8)]">
					{name}
				</h2>
			</div>
			</NavLink>
			
		</div>
	);
};

export default Card;
