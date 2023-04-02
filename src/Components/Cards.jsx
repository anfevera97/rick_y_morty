import React from "react";
import Card from "./Card";

const Cards = ({characters, onClose}) => {

    console.log(characters)

	return (
        <div className="flex flex-wrap absolute top-40 left-10">
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
