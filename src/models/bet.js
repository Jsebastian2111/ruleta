const Sequelize = require("sequelize");
const Player = require("../models/player");
const Game = require("../models/game");

const Model = Sequelize.Model;
const sequelize = new Sequelize("Roulette", "postgres", "xxxx", {
  host: "localhost",
  port: "5432",
  dialect: "postgres",
});

class Bet extends Model {}

Bet.init(
  {
    colour: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    amountbet: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "bet",
    timestamps: false,
    freezeTableName: true,
  }
);

Bet.belongsTo(Player);
Bet.belongsTo(Game);

module.exports = Bet;
