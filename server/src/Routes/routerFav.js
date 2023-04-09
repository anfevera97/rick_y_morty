const { Router } = require("express");
let favs = require("../utils/favs");

const routerFav = Router();

routerFav.post("/", (req, res) => {
	const character = req.body;
	favs.push(character);
	res.status(201).json({ status: "Posted" });
});

routerFav.get("/", (req, res) => {
	res.status(200).json(favs);
});

routerFav.delete("/:id", (req, res) => {
	try {
		const { id } = req.params;
		favs = favs.filter((char) => char.id !== id);
		res.status(200).json({ status: "Deleted" });
		
	} catch (error) {
		res.status(404).json({error: error.message});
	}
});

module.exports = routerFav;
