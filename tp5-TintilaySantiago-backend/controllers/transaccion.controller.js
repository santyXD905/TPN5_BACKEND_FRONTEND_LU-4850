const Transaccion = require('../models/transaccion');
const TransaccionCtrl = {}

//Dar de alta una Transaccion(POST)
TransaccionCtrl.createTransaccion = async (req, res) => { 
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.status(200).json({
        'status': '1',
        'msg': 'Transaccion guardada correctamente'})
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando operacion'})
    }
}
//Recuperar TODAS las Transacciones Registradas(GET)
TransaccionCtrl.getTransacciones = async (req, res) => {
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}
//Recuperar el histórico de transacciones de un determinado cliente (GET), utilizar email como clave
TransaccionCtrl.getTransaccionesbyEmail = async (req, res) => {
    var transacciones = await Transaccion.find({emailCliente: req.params.email});
    res.json(transacciones);
}
/* Recuperar TODAS las Transacciones que tengan como origen y destino las divisas (monedas) 
recibidas como parámetro (GET).Utilice el concepto de PARAMS */
TransaccionCtrl.getTransaccionesbyOrigenDestino = async (req, res) => {
    var transacciones = await Transaccion.find({monedaOrigen: req.params.origen,monedaDestino:req.params.destino});
    res.json(transacciones);
}

module.exports = TransaccionCtrl;

