const router = require('express').Router()
const talleresServices = require('./talleres.services')

router.route('/')
    .get(talleresServices.getAllTalleres)
    .post(talleresServices.postTalleres)

router.route('/:id')
    .get(talleresServices.getTallerById)
    .patch(talleresServices.patchTaller)
    .delete(talleresServices.deleteTaller)

module.exports = router