//defino controlador para el manejo de CRUD
const PasajeCtrl = require('./../controllers/pasaje.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas 
router.get('/', PasajeCtrl.getPasajes);
router.post('/', PasajeCtrl.createPasaje);
router.get('/:categoria', PasajeCtrl.getPasajesbyCategoria);
router.put('/:id', PasajeCtrl.editPasaje);
router.delete('/:id', PasajeCtrl.deletePasaje);

//exportamos el modulo de rutas
module.exports = router;