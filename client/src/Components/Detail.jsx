import useCharacter from "../hooks/useCharacter";
import Loading from "./Loading";

const Detail = () => {
	const character = useCharacter();

	return (
		<div>
			{character.name ? (
				<div>
					<div className="text-azul font-rick text-7xl absolute top-24 left-1/3 drop-shadow-[3px_3px_#e8e838]">
						<h1>{character.name}</h1>
					</div>
					<img
						src={character.image}
						alt={character.name}
						className="rounded-full absolute top-72 right-32 h-2/4"
					></img>

					<div className="text-azul font-rick absolute top-60 left-10 text-6xl grid gap-10 drop-shadow-[3px_3px_#e8e838]">
						<p>Origin: {character.origin?.name}</p>
						<p>Species: {character.species}</p>
						<p>Gender: {character.gender}</p>
						<p>Status: {character.status}</p>
					</div>
				</div>
			) : (
				<Loading />
			)}
		</div>
	);
};

export default Detail;
