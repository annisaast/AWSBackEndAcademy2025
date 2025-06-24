const fs = require('fs');

const writableStream = fs.createWriteStream('learning-path-3/03-dasar-node.js/stream/write.txt');

writableStream.write('Ini merupakan teks baris pertama!\n');
writableStream.write('Ini merupakan teks baris kedua!\n');
writableStream.end('Akhir dari writable stream!');