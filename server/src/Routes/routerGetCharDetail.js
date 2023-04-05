const getCharDetail = require("../Controllers/getCharDetail")
const { Router } = require("express");

const routerCharDetail = Router();

routerCharDetail.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
		const char = await getCharDetail(id);
		res.status(200).json(char);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

module.exports = routerCharDetail;