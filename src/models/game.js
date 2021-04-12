const Sequelize = require("sequelize");
const Player = require("../models/player");

const Model = Sequelize.Model;
const sequelize = new Sequelize("Roulette", "postgres", "xxxx", {
  host: "localhost",
  port: "5432",
  dialect: "postgres",
});

class Game extends Model {}

Game.init(
  {
    result: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "game",
    timestamps: false,
    freezeTableName: true,
  }
);

Game.belongsTo(Player);

module.exports = Game;
