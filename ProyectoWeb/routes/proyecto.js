var express = require('express');
var router = express.Router();
var crud = require('../CRUD/CRUD');
var crudMongo = require('../CRUD/CRUDMONGO');
var redis = require('redis');
var client = redis.createClient();

client.on('connect', function () {
    console.log('connected');
});
client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.setHeader('content-type', 'application/json');

    return client.get('Galeria', (err, result) => {
        if (result) {
            const resultGaleria = JSON.parse(result);
            return res.status(200).json(resultGaleria)
        } else {
            crudMongo.GetTodos().then(response => {
                if (response.length > 0) {
                    client.setex('Galeria', 5, JSON.stringify(response))
                    return res.status(200).json(response);
                } else {
                    return res.status(404).json({
                        message: "Error al obtener todas las fotos"
                    });
                }
            }).catch(error => {
                console.log(error);
                return res.status(500).json({
                    message: "Error en el servidor"
                })
            });
        }
    })
});

router.get('/:id', function (req, res, next) {
    res.setHeader('content-type', 'application/json');

    return client.get(req.params.id, (err, result) => {
        if (result) {
            const resultGaleria = JSON.parse(result);
            return res.status(200).json(resultGaleria)
        } else {
            crudMongo.GetID(req.params.id).then(response => {
                if (response.length > 0) {
                    client.setex(req.params.id, 5, JSON.stringify(response))
                    return res.status(200).json(response);
                } else {
                    return res.status(404).json({
                        message: "No se encontro la foto especificada"
                    });
                }
            }).catch(error => {
                console.log(error);
                return res.status(500).json({
                    message: "Ocurrio un error en el servidor"
                })
            });
        }
    })

});

router.post('/Dato', function (req, res, next) {
    if (req.headers["content-type"] == 'application/json') {
        crudMongo.PostData(req.body).then(response => {
            if (response.result.n > 0) {
                res.status(201).send();
            } else {
                res.status(404).json({
                    message: "Error al guardar el elemento"
                });
            }
        }).catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error en el servidor"
            })
        });
    } else {
        res.status(404).json({
            message: "Error al guardar el elemento, debe ser Json"
        })
    }


});

router.put('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    crudMongo.PutData(req.body, req.params.id).then(response => {
        if (response.result.nModified) {
            res.status(204).send();
        } else {
            res.status(404).json({
                message: "Error al actualizar el elemento"
            });
        }
    }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: "Error en el servidor"
        });
    });
});

router.delete('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    crudMongo.DeleteData(req.params.id).then(response => {
        if (response.result.n > 0) {
            res.status(204).send();
        } else {
            res.status(404).json({
                message: "Error al eliminar el elemento"
            });
        }
    }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: "Error en el servidor"
        })
    });
});

module.exports = router;