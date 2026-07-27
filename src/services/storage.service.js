const {ImageKit,toFile} = require("@imagekit/nodejs");

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(buffer, originalName) {
  const extension = originalName.split(".").pop().toLowerCase();

  const folder =
    extension === "mp3"
      ? "yt-complete-backend/music"
      : extension === "mp4"
      ? "yt-complete-backend/videos"
      : "yt-complete-backend/files";

  const fileName = `${Date.now()}_${originalName}`;

  const result = await client.files.upload({
    file: await toFile(buffer, fileName),
    fileName,
    folder,
  });

  return result;
}

module.exports = { uploadFile }