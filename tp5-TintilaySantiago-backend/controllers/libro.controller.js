const Libro = require('../models/libro');
const LibroCtrl = {}

LibroCtrl.getLibros = async (req, res) => {
    var libros = await Libro.find();
    res.json(libros);
}
LibroCtrl.getLibrosDestacados = async (req, res) => {
    var criteria = {'destacado': true}
    var libros = await Libro.find(criteria);
    res.json(libros);
}

LibroCtrl.createLibro = async (req, res) => {
    var libro = new Libro(req.body);
    console.log(req.body)
    try {
        console.log("maykoooooooooooooooooo")
        await libro.save();
        res.status(200).json({
        'status': '1',
        'msg': 'Libro guardado correctamente'})
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando operacion al guardar el libro'})
    }
}

LibroCtrl.editLibro = async (req, res) => {
    const vlibro = new Libro(req.body);
    try {
        await Libro.updateOne({_id: req.params.id}, vlibro);
        res.status(200).json({
        'status': '1',
        'msg': 'Libro actualizado'
        })
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando la operacion'
        })
    }
}

LibroCtrl.deleteLibro = async (req, res)=>{
    try {
        await Libro.deleteOne({_id: req.params.id});
        res.status(200).json({
        status: '1',
        msg: ' libro eliminado '})} 
    catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando la operacion'})}
}

module.exports = LibroCtrl;