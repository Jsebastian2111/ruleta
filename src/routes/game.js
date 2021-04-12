const express = require("express");
const router = express.Router();

const controller = require("../controllers/game");

router.post("/create-game", controller.createGame);
router.post("/spin", controller.spin);

module.exports = router;
