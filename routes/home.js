var express = require('express');
const ProductModel = require('../models/ProductModel')
const BearbrickModel = require('../models/BearbrickModel');
const GokuModel = require('../models/GokuModel');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  var bearbricks = await BearbrickModel.find();
  var gokus = await GokuModel.find();
  res.render('home/index', { 
     bearbricks: bearbricks,
     gokus: gokus,
   });
})

router.get('')
module.exports = router;
