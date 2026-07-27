const express = require('express')
const musicConroller = require('../controllers/music.controller')
const authMiddleware = require('../middlewares/auth.middleware')

const router = express.Router()
const multer = require("multer");

const upload = multer({
    storage:multer.memoryStorage()
})

router.post("/upload",authMiddleware.authArtist ,upload.single("music") ,musicConroller.createMusic); 
router.post("/album",authMiddleware.authArtist,musicConroller.createAlbum);

router.get('/', authMiddleware.authUser, musicConroller.getAllMusic)
router.get('/album', authMiddleware.authUser, musicConroller.getAllAlbums)











module.exports = router
