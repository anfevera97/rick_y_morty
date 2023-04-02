import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const SearchBar = (props) => {
	const { onSearch } = props;
	const [character, setCharacter] = useState("");
	const location = useLocation();

	
	const handleChange = (event) => {
		setCharacter(event.target.value);
	};

	const handleKeyPress = (event) => {
		if (event.key === "Enter") onSearch(character);
	};

    const [randomchar, setRandomchar] = useState([])

	const handdleButtonClick =() =>{
		const item = onSearch(Math.floor(Math.random() * 267) + 1);
		setRandomchar([...randomchar, item]);
	}

	if(location.pathname !== "/home"){
		return null;
	}

	return (
		<div className="flex gap-3">
			<input
				type="text"
				className="rounded-lg h-6 text-gray-900"
				placeholder="Introduce ID"
				value={character}
                onChange={handleChange}
				onKeyDown={handleKeyPress}
			/>
			<button
				className="bg-azul text-gray-200 rounded-lg"
				onClick={() => onSearch(character)}
			>
				Search
			</button>
			<button className="bg-azul text-gray-200 rounded-lg" onClick={handdleButtonClick}>Randomizer</button>
		</div>
	);
};

export default SearchBar;
