const fs = require('fs')
const ytdl = require('ytdl-core')
const axios = require('axios')
const path = require('path')

const VideoDownload = async ( fileUrl, downloadFolder ) => {

    const fileName = path.basename(fileUrl)

    const localFilePath = path.resolve(__dirname, downloadFolder, fileName)

    try{
        const response = await axios({
            method: 'GET',
            url: fileUrl,
            responseType: 'stream',
        })

        const w = response.data.pipe(fs.createWriteStream(localFilePath))

        w.on('finish', () => {
            console.log('Baixado com sucesso')
        })
    }catch(error){
        throw new Error(error)
    }

}

module.exports = VideoDownload