const fs = require('fs');

/*const data = fs.readFileSync(__dirname+'/data.txt', 'utf8')
console.log(1, data);

const data2 = fs.readFile(__dirname+'/data.txt', 'utf8', (err, data) => {
    console.log(2, data);
})*/

const readableStream = fs.createReadStream(__dirname+'/data.txt', {
    encoding : 'utf8'
})

const writeableStream = fs.createWriteStream(__dirname+'/data2.txt')

/*readableStream.on('data', (chunk) => {
    console.log('chunk received');
    writeableStream.write(chunk)
})*/

readableStream.pipe(writeableStream)