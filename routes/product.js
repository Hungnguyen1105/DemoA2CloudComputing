var express = require('express');
var router = express.Router();
const ProductModel = require('../models/ProductModel');
const BearbrickModel = require('../models/BearbrickModel');
const GokuModel = require('../models/GokuModel');

router.get('/', async (req, res) => {
   // SQL : SELECT * FROM student
   var bearbricks = await BearbrickModel.find();
   var gokus = await GokuModel.find();
   console.log(bearbricks);
   //res.send(students);
   // render ra file view : views/student/index.hbs và gửi kèm data thông qua biến 'students'
   res.render('product/index', { 
      bearbricks: bearbricks,
      gokus: gokus,
    });
})

router.get('/detail/:id', async (req, res) => {
    var id = req.params.id;
    // SELECT * FROM student WHERE id = 'id'
    var product = await ProductModel.findById(id);
    res.render('product/detail', { product:product });
 })
 
 router.get('/delete/:id', async (req, res) => {
    var id = req.params.id;
    await BearbrickModel.findByIdAndDelete(id);
    await GokuModel.findByIdAndDelete(id);
    console.log('Delete product succeed');
    res.redirect('/product');
 })
 
 router.get('/add', (req, res) => {
    res.render('product/add');
 })
 
 router.post('/add', async (req, res) => {
    var product = req.body;
    await ProductModel.create(product);
    console.log('Add Product !');
    res.redirect('/product');
 })
 
 router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var product = await ProductModel.findById(id);
    res.render('product/edit', { product: product })
 })
 
 router.post('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var product = req.body;
    await ProductModel.findByIdAndUpdate(id, product);
    console.log('Update product succeed !');
    res.redirect('/product');
 })
 router.post('/search', async(req,res)=>{
    var keyword = req.body.name;
    var products = await ProductModel.find({Name: new RegExp(keyword,"i")});
    res.render('product/index', {products:products})
 })



module.exports = router;
