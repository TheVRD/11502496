var express = require('express');
var router = express.Router();
var Project = require('../models/Product');


router.get('/', function(req, res, next) {
  res.render('createProduct', { title: 'CA2' });
});
router.get('/product/create', function(req, res, next) {
  res.render('createProduct',{ title: 'Project Form' });
});

router.post('/product/create', function(req, res, next) {
    const newProject = new Project({
      ProductName:req.body.ProductName,
      description:req.body.description,
      Quantity:req.body.Quantity,
      Price:req.body.Price
    });
   
    newProject.save()
      .then((value) => {
        console.log('Product Created');
      })
      .catch((err) => {
        console.log(err);
      })
      res.render('createProduct', { title: 'CA2' });
    
});

module.exports = router;
