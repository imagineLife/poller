const express = require('express');
const app = express();
const path = require('path')

//middlewares
//serve static files via public folder
app.use(express.static('./dist'));

//start app
var httpServer = app.listen(3000)

//create a SOCKET server
var io = require('socket.io').listen(httpServer)


let connections = [];
let audienceMembers = [];
let serverTitle = 'Demo Server Title';

//connection happens when a socket gets connected
io.sockets.on('connection', (connectedSocket) => {

	//when socket DISconnects
	//once happens ONCE, not like an 'on'
	connectedSocket.once('disconnect', () => {

		//find connected member from audienceArr
		//how does the tutorial host use THIS?...
		let curMemInAud = audienceMembers.find(m => m.id == connectedSocket.id)
		
		if(curMemInAud){

			//remove connected member from audienceArr
			audienceMembers.splice(audienceMembers.indexOf(curMemInAud), 1);

			//broadcast updated-audience
			io.sockets.emit('updateAudience', audienceMembers)

			//log cur audience
			console.log(`Currently ${audienceMembers.length} members`)

		}
		//remove the connected socket from connections arr
		connections.splice(connections.indexOf(connectedSocket), 1);
		connectedSocket.disconnect();
		console.log('socket disconnected, remaining sockets')
		console.log(connections.length)


	})


	//the join event, when audience member joins
	connectedSocket.on('joinPoll', (joinData) => {
		
		//gather needed info for joined member
		const newMember = {
			id: connectedSocket.id,
			memberName: joinData.fullName
		}

		//emit the joinedMember socket event
		connectedSocket.emit('joinedMember', newMember);

		//collect connected audience member
		audienceMembers.push(newMember)

		//broadcast an updated audience to all clients
		io.sockets.emit('updateAudience',audienceMembers);


	})

	//add current socket to connections array
	connections.push(connectedSocket)
	console.log(`CONNECTED: cur sockets: ${connections.length}`)
	connectedSocket.emit('welcome', {title: serverTitle})

})

//for connecting DB...
/*
app.get('/api', (req,res) => {})
*/

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

console.log('server running!')