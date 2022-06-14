const Persona = require('../models/persona');
const PersonaCtrl = {}

//Obtener todas las personas (GET)
PersonaCtrl.getPersonas = async (req, res) => {
    var personas = await Persona.find();
    res.json(personas);
}

//Dar de alta una persona (POST)
PersonaCtrl.createPersona = async (req, res) => {
    var persona = new Persona(req.body);
    try {
        await persona.save();
        res.json({
        'status': '1',
        'msg': 'Persona guardada.'})
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando operacion.'})
    }
}

//Obtener UNA persona (GET)
PersonaCtrl.getPersona = async (req, res) => {
    const persona = await Persona.findById(req.params.id);
    res.json(persona);
}

module.exports = PersonaCtrl;
