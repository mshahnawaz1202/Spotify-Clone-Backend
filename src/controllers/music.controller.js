const musicModel = require('../models/music.model')
const jwt = require('jsonwebtoken')
const { uploadFile } = require('../services/storage.service')
const albumModel = require('../models/album.model')

/**--------------------------------------------------------------------------------------------------------------- */
/** function to create music */
async function createMusic(req, res) {

    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized!"
        })
    }


    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (decoded.role !== "artist") {
            return res.status(403).json({
                message: "Forbidden\n You don't have access to create music"
            })
        }




        const { title } = req.body
        const file = req.file

        const result = await uploadFile(
            file.buffer,
            file.originalname
        );
        // console.log(result);

        const music = await musicModel.create({
            uri: result.url,
            title,
            artist: decoded.id
        })

        res.status(201).json({
            message: 'Music created successfully',
            music: {
                id: music._id,
                uri: music.uri,
                title: music.title,
                artist: music.artist,
            },
        });
    }
    catch (err) {
        console.error(err);

        return res.status(401).json({
            message: err.message
        });
    }


}
/**--------------------------------------------------------------------------------------------------------------- */
/** function to create music album */
async function createAlbum(req,res){
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized!"
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (decoded.role !== "artist") {
            return res.status(403).json({
                message: "Forbidden\n You don't have access to create music"
            })
        }

        const {title,musicIds} = req.body

        const album = await albumModel.create({
            title,
            artist:decoded.id,
            musics:musicIds
        })
        res.status(201).json({
            message: 'Music Album created successfully',
            music: {
               id:album._id,
               title:album.title,
               artist:album.artist,
               musics:album.musics
            },
        });

    }catch(err){
        console.error(err);

        return res.status(401).json({
            message: err.message
        });
        
    }
}

module.exports = { createMusic,createAlbum }


