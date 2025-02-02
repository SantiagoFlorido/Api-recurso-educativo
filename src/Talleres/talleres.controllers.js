const Talleres = require('../models/talleres.models')

const findAllUsers = async() => {
    //? esta funcion trae todos los talleres de la base de datos
    const data = await Talleres.findAll()
    return data
}

const findUserById = async (id) => {
    //? esta funcion trae un taller respecto a su id en los parametros de la api
    const data = await Talleres.findOne({
        where:{
            id:id
        }
    })
    return data
}

const postTalleres = async(obj) =>{
    //? esta funcion debe crear un nuevo taller en la base de datos
    const newTaller = await Talleres.create({
        titulo: obj.titulo
    })
    return newTaller
}

const updateTaller = async (id, obj) => {
    const data = await Talleres.update(obj, {
        where: {
            id:id,
        }
    })
    return data[0]
}

const deleteTaller = async (id) => {
    const data = await Talleres.destroy({
        where: {
            id:id
        }
    })
    return data
}

module.exports = {
    findAllUsers,
    postTalleres,
    updateTaller,
    deleteTaller,
    findUserById
}