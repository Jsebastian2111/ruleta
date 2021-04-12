const Sequelize = require("sequelize");

const Model = Sequelize.Model;
const sequelize = new Sequelize("Roulette", "postgres", "xxxx", {
  host: "localhost",
  port: "5432",
  dialect: "postgres",
});

class Player extends Model {}

Player.init(
  {
    playername: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cash: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "player",
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Player;
