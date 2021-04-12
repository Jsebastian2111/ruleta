const express = require("express");
const router = express.Router();

const controller = require("../controllers/player");

router.post("/create-player", controller.createPlayer);

module.exports = router;
