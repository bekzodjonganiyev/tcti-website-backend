const express = require('express')
const router = express.Router()
const multer = require('../config/multer')
const { addDaraja, getById, getAll, updatedaraja, deletedaraja, getQuery } = require('../controller/darajaController')



router.post('/add', multer, addDaraja)
router.get('/all', getAll)
router.get("/query", getQuery)
router.get('/:id', getById)
router.put('/:id', multer, updatedaraja)
router.delete('/:id', deletedaraja)

module.exports = router
