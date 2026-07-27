import ImageKit from '@imagekit/nodejs';


const client = new ImageKit({
  privateKey: process.env['IMAGEKIT_PRIVATE_KEY'], // This is the default and can be omitted
});

import ImageKit, { toFile } from "@imagekit/nodejs";

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(buffer, originalName) {
  const fileName = `media_${Date.now()}_${originalName}`;

  const result = await client.files.upload({
    file: await toFile(buffer, fileName),
    fileName,
    folder: "spotify/media", // Change this folder if needed
  });

  return result;
}



module.exports = uploadFile;