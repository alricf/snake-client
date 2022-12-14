const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });

  // event handler to display message to player/client after being kicked out by server
  conn.on("data", () => {
    console.log("you ded cuz you idled");
  });

  // connection successful event handler & name written to server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ACF");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };