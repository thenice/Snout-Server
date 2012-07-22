
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.danny = function(req, res){
  res.render('index', { title: 'Danny' });
};