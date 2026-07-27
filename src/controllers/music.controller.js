const musicModel = require('../models/music.model')
const jwt = require('jsonwebtoken')
const { uploadFile } = require('../services/storage.service')
const albumModel = require('../models/album.model')

/**--------------------------------------------------------------------------------------------------------------- */
/** function to create music */
async function createMusic(req, res) {






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
/**--------------------------------------------------------------------------------------------------------------- */
/** function to create music album */
async function createAlbum(req, res) {


    const { title, musicIds } = req.body

    const album = await albumModel.create({
        title,
        artist: decoded.id,
        musics: musicIds
    })
    res.status(201).json({
        message: 'Music Album created successfully',
        music: {
            id: album._id,
            title: album.title,
            artist: album.artist,
            musics: album.musics
        },
    });


}
/**--------------------------------------------------------------------------------------------------------------- */
/** get all musics saved in database  */

async function getAllMusic(req, res) {
    const musics = await musicModel
    .find()
    .limit(2)
    .populate("artist")
    res.status(201).json({
        message: "Musics Fetched Successfully!",
        musics: musics
    })

}

/**--------------------------------------------------------------------------------------------------------------- */
async function getAllAlbums(req, res) {
    const albums = await albumModel.find()
        .populate("artist", "username email")
        .populate("musics");

    res.status(200).json({
        message: "Albums fetched successfully!",
        albums
    });
}

module.exports = {
    createMusic,
    createAlbum,
    getAllMusic,
    getAllAlbums
};


