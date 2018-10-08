var express = require('express');
var router = express.Router();
var crud = require('../CRUD/CRUD')

/* GET home page. */
router.get('/', function(req, res, next) {
  let temp = crud.GetTodos();
  if(!temp){
    res.json({Codigo: 404, mensaje: "No se han encontrado datos", datos: ""});
  }else{
    res.json({codigo: 200, mensaje:"Listado: ", datos: temp});
  }
  
});

router.get('/:id', function(req, res, next) {
  let temp = crud.GetID(req.params.id);
  if(!temp){
    res.json({Codigo: 404, mensaje: "No se han encontrado datos", datos: ""});
  }else{
    res.json({codigo: 200, mensaje:"Dato Encontrado ", datos: temp});
  }
});

router.post('/Dato', function(req, res, next) {
  let temp = crud.PostData(req.body);
  if(temp){
    res.json({Codigo: 201, mensaje: "Agregado con éxito", datos: temp});
  }else{
    res.json({codigo: 404, mensaje:"No Agregado ", datos: ""});
  }
});

router.put('/:id', function(req, res, next) {
  let temp = crud.PutData(req.body, req.params.id);
  if(temp){
    res.json({Codigo: 204, mensaje: "Modificado con éxito", datos: temp});
  }else{
    res.json({codigo: 404, mensaje:"No se encontro al alemento ", datos: ""});
  }
});

router.delete('/:id', function(req, res, next) {
  let temp = crud.DeleteData(req.params.id);
  if(temp){
    res.json({Codigo: 204, mensaje: "Eliminado con éxito", datos: ""});
  }else{
    res.json({codigo: 404, mensaje:"No se encontro al alemento ", datos: ""});
  }
});

module.exports = router;
