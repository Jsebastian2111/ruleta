const Player = require("../models/player");
const endpoint = {};

function createPlayer(req, res) {
  Player.create({
    playername: req.body.player_name,
    cash: 15000,
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
}

endpoint.createPlayer = createPlayer;
module.exports = endpoint;
