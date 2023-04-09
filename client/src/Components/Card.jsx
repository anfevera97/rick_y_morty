import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { getFavorites, removeFavorite } from "../redux/actions";
import axios from "axios";

const Card = ({
	id,
	detailId,
	name,
	species,
	gender,
	image,
	onClose,
	myFavorites,
}) => {
	const URL = "http://localhost:3001";
	const [isFav, setIsFav] = useState(false);
	const dispatch = useDispatch();

	const addFavorites = (character) => {
		axios
			.post(`${URL}/rickandmorty/favorites`, character)
			.then((res) => console.log("Posted"));
	};

	const removeFavorite = async (id) => {
		// const URL = "http://localhost:3001";
		await axios.delete(`${URL}/rickandmorty/favorites/${id}`);
		dispatch(getFavorites());
		alert("Eliminado de favoritos");
	};

	const handleFavorites = () => {
		if (isFav) {
			setIsFav(false);
			removeFavorite(id);
		} else {
			setIsFav(true);
			addFavorites({ id, detailId, name, species, gender, image });
		}
	};

	useEffect(() => {
		myFavorites.forEach((fav) => {
			if (fav.id === id) {
				setIsFav(true);
			}
		});
	}, [myFavorites, id]);

	return (
		<div className="bg-gray-900 w-max h-max mx-3 rounded-xl relative hover:shadow-2xl mt-3 p-1">
			{isFav ? (
				<button onClick={handleFavorites}>❤️</button>
			) : (
				<button onClick={handleFavorites}>🤍</button>
			)}
			<button
				onClick={onClose}
				className="h-auto w-[25px] rounded text-black bg-gray-500 hover:text-red-700 
				hover:bg-transparent float-right"
			>
				X
			</button>

			<NavLink to={`/detail/${detailId}`}>
				<div className="relative">
					<img src={image} alt={name} className="rounded-xl m-1" />
					<h2
						className="text-4xl text-azul bg-amarilloName rounded-lg absolute 
				bottom-2 drop-shadow-[1.2px_1.2px_rgba(0,0,0,0.8)]"
					>
						{name}
					</h2>
				</div>
			</NavLink>
			<div
				className="text-2xl font-rick flex justify-around content-fit text-verde 
			drop-shadow-[1.2px_1.2px_#e8e83899]"
			>
				<h2>{species}</h2>
				<h2>{gender}</h2>
			</div>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		removeFavorite: (detailId) => {
			dispatch(removeFavorite(detailId));
		},
	};
};

const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
