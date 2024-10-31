// Program Nodejs baca file teks lalu cetak isinya ke console

const fs = require('fs');

fs.readFile('tugas.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Terjadi kesalahan:', err);
        return;
    }

console.log('Isi file: data', data)
});

// Server HTTP sederhana Nodejs lalu merespons "Hello, World!"
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}/`);
});