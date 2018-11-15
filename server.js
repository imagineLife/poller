const express = require('express');
const app = express();

//middlewares
//serve static files via public folder
app.use(express.static('./dist'));

//start app
var httpServer = app.listen(3000)

//create a SOCKET server
var io = require('socket.io').listen(httpServer)


let connections = [];
let serverTitle = 'Demo Server Title';

//connection happens when a socket gets connected
io.sockets.on('connection', (connectedSocket) => {

	//when socket DISconnects
	//once happens ONCE, not like an 'on'
	connectedSocket.once('disconnect', () => {
		//remove socket from connections arr
		connections.splice(connections.indexOf(connectedSocket), 1);
		connectedSocket.disconnect();
		console.log('socket disconnected, remaining sockets')
		console.log(connections.length)
	})


	//add current socket to connections array
	connections.push(connectedSocket)
	console.log('socket CONNECTED, connected sockets:')
	console.log(connections.length)
	console.log(connectedSocket.id)

	connectedSocket.emit('welcome', {title: serverTitle})

})

console.log('server running!')