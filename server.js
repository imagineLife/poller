const express = require('express');
const app = express();

//middlewares
//serve static files via public folder
app.use(express.static('./dist'));

//start app
var httpServer = app.listen(3000)

//create a SOCKET server
var io = require('socket.io').listen(httpServer)

//connection happens when a socket gets connected
io.sockets.on('connection', (connectedSocket) => {
	console.log('New connectedSocket')
	console.log(connectedSocket.id)
})

console.log('server running!')