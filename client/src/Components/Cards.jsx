import { useEffect } from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { getFavorites } from "../redux/actions";

const Cards = ({ characters, onClose }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getFavorites());
	}, [dispatch]);

	return (
		<div className="flex flex-wrap absolute top-40 left-24">
			{characters.map(({ id, name, image, species, gender, status }) => (
				<Card
					key={id}
					detailId={id}
					name={name}
					image={image}
					species={species}
					gender={gender}
					status={status}
					onClose={() => onClose(id)}
				/>
			))}
		</div>
	);
};

export default Cards;
