const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

// pass in returned object called conn from connect function in client.js file into setupInput function in input.js file.
setupInput(connect());