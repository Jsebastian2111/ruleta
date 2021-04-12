CREATE TABLE player (
  id SERIAL NOT NULL,
  playername varchar(50) NOT NULL,
  cash decimal(20,3) NOT NULL,
	PRIMARY KEY (id)
  );
  
CREATE TABLE game (
  id SERIAL NOT NULL,
  "playerId" int NOT NULL,
  result varchar(10) DEFAULT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY ("playerId") REFERENCES player(id)
);

CREATE TABLE bet (
  id SERIAL NOT NULL,
  "playerId" int NOT NULL,
  "gameId" int NOT NULL,
  colour varchar(50) NOT NULL,
  amountbet decimal(20,2) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY ("playerId") REFERENCES player(id),
	FOREIGN KEY ("gameId") REFERENCES game(id)
)
