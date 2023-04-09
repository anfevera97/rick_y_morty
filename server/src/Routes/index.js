const { Router } = require("express");
const routerCharById = require("./routerGetCharById");
const routerCharDetail = require("./routerGetCharDetail")
const routerFav = require("./routerFav")

const router = Router();

router.use("/onsearch", routerCharById);
router.use("/detail", routerCharDetail);
router.use("/rickandmorty/favorites", routerFav);

module.exports = router;
