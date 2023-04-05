const { Router } = require("express");
const routerFav = Router();

let favorites = [];

routerFav.post("/", (req, res) => {
	const character = req.body;
	favorites.push(character);
	res.status(201).json({ status: "Posted" });
});

routerFav.get("/", (req, res) => {
	res.status(200).json(favorites);
});

routerFav.delete("/:id", (req, res) => {
	const { id } = req.params;
	favorites = favorites.filter((char) => char.id !== id);
	res.status(200).json({ status: "Deleted" });
});

module.exports = routerFav;
