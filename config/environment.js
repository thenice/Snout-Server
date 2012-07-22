// Environment File

/**
 * Module dependencies.
 */

var express    =  require('express')
   , routes    =  require('../routes');

app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});


app.configure('development', function(){
  app.use(express.errorHandler());
});

/**
 * Globals
 */
models      =  {},
controllers =  {},
mongoose    =  require('mongoose'),
Schema      =  mongoose.Schema,
ObjectId    =  Schema.ObjectId,
_           =  require('../lib/underscore.js');

mongoose.connect('mongodb://localhost/snout');

/**
 * Load all models in the /models dir   
**/

_.extend(this,models);

require("fs").readdirSync("./models").forEach(function(file) {
   var moduleName       =  file.split(".")[0];
   moduleName           =  moduleName.charAt(0).toUpperCase() + moduleName.slice(1) // Capitalize
   models[moduleName]   =  require("../models/" + file);
});

/**
 * Load all controllers in the /controllers dir   
**/
require("fs").readdirSync("./controllers").forEach(function(file) {
   var moduleName          =  file.split(".")[0]
   moduleName              =  moduleName.charAt(0).toUpperCase() + moduleName.slice(1) // Capitalize
   controllers[moduleName] =  require("../controllers/" + file);
});

console.log("==> Snout environment loaded.")