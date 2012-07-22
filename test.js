var environment =  require("./config/environment.js");
var vows = require('vows');

/**
 * Load all tests in the /tests dir   
**/

var tests = {}

require("fs").readdirSync("./tests").forEach(function(file) {
   var moduleName    =  file.split(".")[0];
   test =  require("./tests/" + file);
});

console.log("==> Snout test suite has completed.")