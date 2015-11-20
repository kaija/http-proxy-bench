var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/run', function(req, res, next){
  url = req.query.url;
  proxy = req.query.proxy;
  if(!url) {
    res.send('missing url parameter').status(400);
    return;
  }
  var option = {
    method: 'GET',
    jar: true,
    uri: url
  };
  if(proxy) {
    option['proxy'] = proxy;
  }
  request(option, function(err, resp, data){
    res.send(data).status(resp.statusCode);
  });
  //res.send('OK');
});

module.exports = router;
