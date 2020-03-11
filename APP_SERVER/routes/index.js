var express = require('express');
var router = express.Router();
var ctrlAbout = require('./../controllers/about');
var ctrlList = require('./../controllers/list-display');

/* GET home page. */
router.get('/', (req, res) => res.render('index', {title: 'Mobile Phone Store'}));

router.get('/about', ctrlAbout.main);

router.get('/list', ctrlList.main);

router.get('/display', (req, res) => res.render('display'));

module.exports = router;
