
/**var express = require('express');
var router = express.Router();**/


/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'First Express Generator Site',
                        message: 'Our first page'} );
});


/* GET ABOUT page */
router.get('/about', function(req, res, next) {
   res.render('about'); 
});

router.get('/projects', function(req, res, next) {
   res.render('projects'); 
});

router.get('/services', function(req, res, next) {
   res.render('services'); 
});

router.get('/contact', function(req, res, next) {
   res.render('contact'); 
});

module.exports = router;
