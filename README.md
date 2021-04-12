# ruleta
Este proyecto simula el comportamiento de un juego de Ruleta Online, a continuación se describirán los pasos de su desarrollo y se utilizó NodeJS para crear la API y PostgresSQL
para la DB.

Para empezar, se debe ejecutar el archivo db.script.sql para crear las tablas necesarias, posteriormente se hace la conexión con la base de datos, se deben especificar 
los parametros requeridos que son el nombre de la base de datos, el usuario de la base de datos y la contraseña que corresponde. La conexión con la DB se establece
con los archivos que están dentro de la carpeta modelos y con el archivo index.js

Se debe ejecutar en un "command window" el programa mediante la sentencia "node index.js", al realizar está sentencia el programa envia un mensaje si la conexión con la DB
fue satisfactoria.

En un inicio, se crea un nuevo jugador, así que, con el método POST a través de la URL "http://localhost:4000/api/player/create-player" se realiza la petición
de añadir un nuevo jugador, cabe aclarar que el cuerpo de la petición debe ser en formato JSON por ejemplo:

{"player_name": "Username"}

En segundo lugar, se crea un nuevo juego, dal igual que en el paso anterior, con el método POST mediante la URL "http://localhost:4000/api/game/create-game" hace
la peteción creando un nuevo juego, teniendo en cuenta que está debe recibir el id del jugador. 

{"player_id": 1}

Para apostar se creó la lógica que correspondía a los requerimientos. En este caso, con el método POST se le indica la petición con los parametros que se desea. 
Es decir, mediante la URL "http://localhost:4000/api/bet/create-bet" se realiza la petición indicándole el id del jugador, el id del juego, el porcentaje de la apuesta
y el color al que desea apostar sea negro, verde o rojo. 

{"player_id":1, "game_id: 2, "amount_bet":19 "colour": "red"}

Por ultimo, para rodar la ruleta, mediante el método POST a través de la URL "http://localhost:4000/api/game/spin" se envia el id del jugador y el id del juego para
que al final el programa le diga al jugador si ha ganado o perdido. 




