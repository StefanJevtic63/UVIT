const http = require('http');
const path = require('path');
const app = require('./app');

const server = http.createServer(app);
server.listen(3000);
server.once('listening', function(req, res, next){
    console.log("Server je pokrenut na adresi htttp://localhost:3000");
})