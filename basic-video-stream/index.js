const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs'); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
});

app.get('/video', (req, res) => {
    
    const range = req.headers.range;
    if (!range) {
        res.status(400).json('Range required')
    }

    const videoPath = 'video.mp4';
    const videoSize = fs.statSync('video.mp4').size;
    const CHUNK_SIZE = 10**6;
    const start = Number(range.replace(/\D/g, ""))
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1)

    console.log(videoPath,videoSize,CHUNK_SIZE,start,end);
    const contenLength = end - start + 1;
    const headers = {
        "Content-Range"  : `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges"  : "bytes",
        "Content-Length" : contenLength,
        "Content-Type"   : "video/mp4"
    };

    res.writeHead(206, headers);

    const videoSteram = fs.createReadStream(videoPath, {start, end})
    videoSteram.pipe(res);
});

app.listen(3000, () => {
    console.log('started');
})