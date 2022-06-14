//defino controlador para el manejo de CRUD
const TransaccionCtrl = require('../controllers/transaccion.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas 
router.get('/',TransaccionCtrl.getTransacciones);
router.get('/:email',TransaccionCtrl.getTransaccionesbyEmail);
router.get('/:origen/:destino',TransaccionCtrl.getTransaccionesbyOrigenDestino);
router.post('/', TransaccionCtrl.createTransaccion);

//exportamos el modulo de rutas
module.exports = router;