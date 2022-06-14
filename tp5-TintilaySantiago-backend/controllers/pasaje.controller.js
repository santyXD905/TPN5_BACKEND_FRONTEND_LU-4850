const Pasaje = require('../models/pasaje');
const PasajeCtrl = {}

/*Recuperar TODOS los pasajes (GET) incluyendo la 
información de los pasajeros.*/
PasajeCtrl.getPasajes = async (req, res) => {
    var pasajes = await Pasaje.find().populate("pasajero");
    res.json(pasajes);
}

/*Recuperar SOLO los pasajeros que tienen una determinada 
categoría de Pasajero.*/
PasajeCtrl.getPasajesbyCategoria = async (req, res) => {
    var pasajes = await Pasaje.find( {categoriaPasajero : req.params.categoria} ).populate("pasajero");
    res.json(pasajes);
}

//Dar de alta un pasaje (POST), enviar además el pasajero.
PasajeCtrl.createPasaje = async (req, res) => {
    var pasaje = new Pasaje(req.body);
    try {
        await pasaje.save();
        res.status(200).json({
        'status': '1',
        'msg': 'Pasaje guardado.'})
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando operacion.'})
    }
}

// Modificar un pasaje (PUT)
PasajeCtrl.editPasaje = async (req, res) => {
    const vpasaje = new Pasaje(req.body);
    try {
        await Pasaje.updateOne({_id: req.body._id}, vpasaje);
        res.status(200).json({
        'status': '1',
        'msg': 'Pasaje actualizado'}) 
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando la operacion' }) 
    }
}

//Eliminar un pasaje (DELETE)
PasajeCtrl.deletePasaje = async (req, res)=>{
    try {
    await Pasaje.deleteOne({_id: req.params.id});
        res.status(200).json({
        'status': '1',
        'msg': ' removed'}) 
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando la operacion'}) 
    }
}
    
module.exports = PasajeCtrl;