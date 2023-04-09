import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFavorites } from "../redux/actions";
import Card from "./Card";


const Favorites = () => {
	const favorites = useSelector((state) => state.myFavorites);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFavorites());
    }, [dispatch])


	return (
		<div className="flex flex-wrap absolute top-40 left-24">
			{favorites.map(({ id, detailId, name, species, gender, image }) => {
				return (
					<Card
						key={detailId}
						id={id}
						name={name}
						species={species}
						gender={gender}
						image={image}
					/>
				);
			})}
		</div>
	);
};

export default Favorites;
