var express = require('express');
var router = express.Router();
var crud = require('../CRUD/CRUD');
var crudMongo = require('../CRUD/CRUDMONGO');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');

  crudMongo.GetTodos().then(response => {
      if(response.length > 0){
          res.json(response);
      }else{
          res.sendStatus(404);
      }
  }).catch(error => console.error(error));
});

router.get('/:id', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  crudMongo.GetID(req.params.id).then(response => {
      if(response.length > 0){
          res.json(response);
      }else{
          res.sendStatus(404);
      }
  }).catch(error => console.error(error));
});

router.post('/Dato', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  crudMongo.PostData(req.body).then(response => {
      if(response.result.ok){
          res.sendStatus(201);
      }else{
          res.sendStatus(404);
      }
  }).catch(error => console.error(error));
});

router.put('/:id', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  crudMongo.PutData(req.body, req.params.id).then(response => {
    if(response.result.ok){
        res.sendStatus(201);
    }else{
        res.sendStatus(404);
    }
}).catch(error => console.error(error));
});

router.delete('/:id', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  crudMongo.DeleteData(req.params.id).then(response => {
    if(response.result.ok){
        res.sendStatus(201);
    }else{
        res.sendStatus(404);
    }
}).catch(error => console.error(error));
});

module.exports = router;
