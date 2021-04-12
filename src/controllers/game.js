const Game = require("../models/game");
const Bet = require("../models/bet");
const Player = require("../models/player");
const endpoint = {};

function createGame(req, res) {
  Game.create({
    playerId: req.body.player_id,
    result: null,
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
}

function spin(req, res) {
  const gameResult = getRandom();
  const pId = req.body.player_id;
  const gId = req.body.game_id;

  console.log(get_cash(pId));
  Game.update(
    {
      result: gameResult,
    },
    {
      where: {
        id: req.body.game_id,
      },
    }
  ).then();

  Bet.findAll({
    where: {
      playerId: req.body.player_id,
      gameId: req.body.game_id,
    },
  }).then((b) => {
    if (b[0].colour == gameResult) {
      Player.findAll({
        where: {
          id: pId,
        },
      }).then((player) => {
        Bet.findAll({
          where: {
            playerId: pId,
            gameId: gId,
          },
        }).then((bet) => {
          if (gameResult == "green") {
            Player.update(
              {
                cash: player[0].cash + bet[0].amountbet * 10,
              },
              {
                where: {
                  id: pId,
                },
              }
            ).then(res.status(200).send("Ganaste!"));
          } else {
            Player.update(
              {
                cash: player[0].cash + bet[0].amountbet * 2,
              },
              {
                where: {
                  id: pId,
                },
              }
            ).then(res.status(200).send("Ganaste!"));
          }
        });
      });
    } else {
      res.status(200).send("Perdiste");
    }
  });
}

function getRandom() {
  var num = Math.random();
  if (num <= 0.495) return "black";
  else if (num >= 0.515) return "red";
  else return "green";
}

function get_cash(id) {
  Player.findAll({
    where: {
      id: id,
    },
  }).then((data) => {
    return data[0].cash;
  });
}

function get_betamount(p_id, g_id) {
  Bet.findAll({
    where: {
      playerId: p_id,
      gameId: g_id,
    },
  }).then((data) => {
    return data[0].amount_bet;
  });
}

endpoint.createGame = createGame;
endpoint.spin = spin;
module.exports = endpoint;
