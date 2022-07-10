const videoDownload = require('../services/videoDownload')
const ytdl = require('ytdl-core');
const fs = require('fs')

module.exports = YoutubeController = {
    video: async function(request, response) {
        const { url } = request.body
    
        const videoDetails = await ytdl.getInfo(url)

        ytdl(url, { quality: '137', }).pipe(fs.createWriteStream(`./download/1080p.mp4`))

        // const urlDownload = `../../download/${urlSplit[1]}.mp4`

        // return response.status(201).send({ data: urlDownload })
    }
}