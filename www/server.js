const app = require('../app');
const http = require('http');
const config = require('../config')[process.env.NODE_ENV];

const ip_address = config.ip_address;
const port = config.port;

const server = http.createServer(app);

server.listen(port, ip_address);
server.on('error', onError);
server.on('listening', onListening);

function onListening() {
    var addr = server.address();
    console.log('Listening on ', addr, 'Env', process.env.NODE_ENV);
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    switch (error.code) {
        case 'EACCES':
            console.error(port + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(port + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}



