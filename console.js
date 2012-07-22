#!/usr/local/bin/node

console.log("==> Loading Snout console.")

var   environment =  require("./config/environment.js"),
      repl        =  require("repl"),
      context     =  repl.start("Snout> ").context;

// Load enviornment modules and Objects
context.models = models;
context.controllers = controllers;
context.mongoose = mongoose;
context["Schema"] = mongoose.schema;
context["ObjectId"] = Schema.ObjectId;
context["_"] = require('./lib/underscore.js');
_.extend(context,models);

