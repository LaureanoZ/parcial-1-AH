import * as service from '../../services/client.services.js'

function getClient(req, res) {
    const filter = req.query
    service.getClient(filter)
        .then(function (data) {
            res.status(200).json(data)
        })
}
function createClient(req, res) {
    const client = {
        nombre: req.body.nombre,
        foto: req.body.foto,
        descripcion: req.body.descripcion,
        proyectos: req.body.proyectos
    }

    service.createClient(client)
        .then(function (client) {
            res.status(201).json(client)
        })
}
export{
    getClient,
    createClient,
}