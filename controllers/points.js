app.get('/points', function (request, response) {
   models.Point.find({}, function(error, points) {
      models.Point.eat();
      response.send(points);
   });
});

app.get('/points/:id', function (request, response) {
   models.Point.findOne({_id: request.params.id}, function(error, point) {
      if(!error) {
         point.logTitle();
         response.send(point);
      } else {
         response.send({error : "Could not find Point with that ID."});
      }
   });
});

app.put('/points/:id', function (request, response) {
   console.log("Edit Point.");
});

app.post('/points', function (request, response) {
   console.log("Create Point.");
});
