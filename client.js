const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541 // PORT number here,
  });

  // event handler to display message to player/client after being kicked out by server
  conn.on("data", () => {
    console.log("you ded cuz you idled");
  });

  // connection successful event handler & name written to server snake
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ACF");

    // Say Message upon snake moving
    conn.write("Say: Sup");

    // conn.write("Move: up");

    // Moves snake right after 50ms
    /*
    setTimeout( () => {
      conn.write("Move: right");
    }, 50);
    */

    // Moves snake up every 50ms.
    /*
    setInterval( () => {
      conn.write("Move: up");
    }, 50);
    */

  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };