const getCharById = require("../Controllers/getCharById");
const { Router } = require("express");

const routerCharById = Router();

routerCharById.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
		const char = await getCharById(id);
		res.status(200).json(char);
	} catch (error) {
		res.status(400).json({ error:"ESTE PERSONAJE NO EXISTE" });
	}
});

module.exports = routerCharById;
