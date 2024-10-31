const http = require('http');

const server = http.createServer((req, res) => {
    setTimeout(() => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!\\\\n')
        res.end('Hello, World!\\\\n');
    }, 1000);
})
