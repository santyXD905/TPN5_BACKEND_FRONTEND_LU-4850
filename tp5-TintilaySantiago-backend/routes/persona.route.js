//defino controlador para el manejo de CRUD
const PersonaCtrl = require('./../controllers/persona.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas 
router.get('/', PersonaCtrl.getPersonas);
router.post('/', PersonaCtrl.createPersona);
router.get('/:id', PersonaCtrl.getPersona);

//exportamos el modulo de rutas
module.exports = router