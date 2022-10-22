// stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // when user types:
  // 1. control+c aka \u0003 the game is terminated.
  // 2. w - snake moves up
  // 3. a - snake moves left
  // 4. s - snake moves down
  // 5. d - snake moves right
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  }

  // say message upon snake moving
  connection.write("Say: Sup");

};

module.exports = { setupInput };