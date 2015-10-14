
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'This is the test website',
                        message: 'My portfolio'} );
});

/*Get the main index file*/

router.get('/', function(req, res, next) {
   res.render('index'); 
});
/* GET ABOUT page */
router.get('/about', function(req, res, next) {
   res.render('about'); 
});
/*GET PROJECTS page*/
router.get('/projects', function(req, res, next) {
   res.render('projects'); 
});
/*GET SERVICES page*/
router.get('/services', function(req, res, next) {
   res.render('services'); 
});
/*GET CONTACT page*/
router.get('/contact', function(req, res, next) {
   res.render('contact'); 
});



module.exports = router;

