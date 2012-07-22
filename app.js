var   environment =  require("./config/environment.js"),
      http        =  require('http');

// Start Server
http.createServer(app).listen(app.get('port'), function(){
   console.log("==> Snout-Server running at: http://localhost:" + app.get('port'));
});