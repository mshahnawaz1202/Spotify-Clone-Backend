const express = require('express')
const musicConroller = require('../controllers/music.controller')
const router = express.Router()
const multer = require("multer");

const upload = multer({
    storage:multer.memoryStorage()
})

router.post("/upload", upload.single("music") ,musicConroller.createMusic);











module.exports = router
