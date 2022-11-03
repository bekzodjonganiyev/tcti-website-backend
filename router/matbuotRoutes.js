const express = require('express')
const router = express.Router()
const multer = require('../config/multer')

const { addMatbuot, getById, getAll, updatematbuot, deletematbuot } = require('../controller/matbuotController')




router.post('/add', multer, addMatbuot)
router.get('/all', getAll)
router.get('/:id', getById)
router.put('/:id', multer, updatematbuot)
router.delete('/:id', deletematbuot)

module.exports = router
