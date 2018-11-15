import React from "react";
import ReactDOM from "react-dom";
import '../public/index.css'
import io from 'socket.io-client'

class App extends React.Component{
	constructor(props){
		super(props)
		this.socket;
		this.connectSocket = this.connectSocket.bind(this)	
	}
	
	connectSocket(){
		console.log('client connected to socket it')
		console.log(this.socket.id)
	}

	componentWillMount(){
		//connect socket server
		this.socket = io('http://localhost:3000')

		//add a listener to the socket for the connect event
		this.socket.on('connect', this.connectSocket);
	}

	render(){
		return (
			<div>
				<p className="title">Dummy React Component here!</p>
				<p>Mic Check</p>
			</div>
		);
	}
}
  
export default App;