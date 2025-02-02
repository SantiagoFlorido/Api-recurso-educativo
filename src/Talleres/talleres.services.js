const talleresControllers = require('./talleres.controllers')

const getAllTalleres = (req,res) => {
    talleresControllers.findAllUsers()
        .then((data)=>{
            res.status(200).json(data)
        })
        .catch((err)=>{
            res.status(400).json({message: err.message})
        })
}

const postTalleres = (req,res)=>{
    const {titulo} = req.body

    talleresControllers.postTalleres({titulo})
        .then((data)=>{
            res.status(201).json(data)
        })
        .catch((err)=>{
            res.status(400).json({message: err.message, 
                fields: {
                    titulo: 'string(256)'
                }
            })
        })
}

const patchTaller = (req, res) => {
    const id = req.params.id
    const {titulo, totalCompleted} = req.body
    talleresControllers.updateTaller(id, {titulo, totalCompleted})
        .then((data)=>{
            if(data){
                res.status(200).json({message: 'Taller modificado de manera exitosa'})
            }else{
                res.status(404).json({message: 'id invalido'})
            }
        })
        .catch((err)=>{
            res.status(400).json({message: err.message})
        })
}

const deleteTaller = (req, res) => {
    const id = req.params.id 
    talleresControllers.deleteTaller(id)
    .then((data)=>{
        if(data){
            res.status(200).json({message: 'Taller eliminado de manera correcta'})
        }else{
            res.status(404).json({message: 'id invalido'})
        }
    })
    .catch((err)=>{
        res.status(400).json({message: err.message})
    })
}

const getTallerById = (req, res) => {
    const id = req.params.id
    talleresControllers.findUserById(id)
        .then((data)=>{
            if(data){
                res.status(200).json(data)
            }else{
                res.status(404).json({message: 'id Invalido'})
            }
        })
        .catch((err)=>{
            res.status(400).json({message: err.message})
        })
}


module.exports = {
    getAllTalleres,
    postTalleres,
    patchTaller,
    deleteTaller,
    getTallerById
}