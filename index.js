const express = require("express");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
app = express();

const sequelize = new Sequelize("Roulette", "postgres", "xxxx", {
  host: "xxxx",
  port: "5432",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const Player = require("./src/routes/player");
const Game = require("./src/routes/game");
const Bet = require("./src/routes/bet");

app.set("port", process.env.PORT || 4000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "X-API-KEY,Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Alllow", "GET, POST, OPTIONS, PUT, DELETE");

  next();
});

app.use("/api/player", Player);
app.use("/api/game", Game);
app.use("/api/bet", Bet);

/*const time = new Date().toLocaleString();
console.log(time);*/

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}...`);
});
