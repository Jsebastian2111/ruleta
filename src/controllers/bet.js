const Bet = require("../models/bet");
const Player = require("../models/player");
const endpoint = {};

function createBet(req, res) {
  Player.findAll({
    where: {
      id: req.body.player_id,
    },
  }).then((player) => {
    const pre_cash = player[0].cash;
    if (pre_cash <= 1000 && pre_cash > 0) {
      Bet.create({
        playerId: req.body.player_id,
        gameId: req.body.game_id,
        amountbet: pre_cash,
        colour: req.body.colour,
      })
        .then((data) => {
          res.status(200).send("Apostaste todo");
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    } else if (pre_cash == 0) {
      res.status(409).send("No tienes dinero para apostar");
    } else {
      Bet.create({
        playerId: req.body.player_id,
        gameId: req.body.game_id,
        amountbet: (req.body.amount_per * pre_cash) / 100,
        colour: req.body.colour,
      })
        .then((data) => {
          Player.update(
            {
              cash: pre_cash - (req.body.amount_per * pre_cash) / 100,
            },
            {
              where: {
                id: req.body.player_id,
              },
            }
          ).then(res.status(200).send("La apuesta fue creada"));
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    }
  });
}

endpoint.createBet = createBet;
module.exports = endpoint;
