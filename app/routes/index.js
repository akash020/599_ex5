var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var dataFile = req.app.get('appData');
  var pagePhotos = [];
  var pageHighlights = dataFile.data.highlights;

//highlights in an array which is why can iterate through it
  dataFile.data.highlights.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.image);
  });

  res.render('index', {
    pageTitle: 'Home',
    highlights: pageHighlights,
    pageID: 'home'
  });

});

module.exports = router;
