const { Router } = require("express");
const routerCharById = require("./routerGetCharById");
const routerCharDetail = require("./routerGetCharDetail")
const routerFav = require("./routerFav")

const router = Router();

router.use("/onsearch", routerCharById);
router.use("/detail", routerCharDetail);
router.use("/favorites", routerFav); //? No sé si esta funcionando correctamente.

module.exports = router;
