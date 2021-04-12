const express = require("express");
const router = express.Router();

const controller = require("../controllers/bet");

router.post("/create-bet", controller.createBet);

module.exports = router;
