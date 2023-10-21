var express = require('express');
const ProductModel = require('../models/ProductModel')
const BearbrickModel = require('../models/BearbrickModel');
const GokuModel = require('../models/GokuModel');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  // SQL : SELECT * FROM student
  var bearbricks = await BearbrickModel.find();
  var gokus = await GokuModel.find();
  console.log(bearbricks);
  //res.send(students);
  // render ra file view : views/student/index.hbs và gửi kèm data thông qua biến 'students'
  res.render('home/index', { 
     bearbricks: bearbricks,
     gokus: gokus,
   });
})
module.exports = router;
