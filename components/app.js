import React from "react";
import ReactDOM from "react-dom";
import '../public/index.css'
import io from 'socket.io-client'
import Header from './Header'
class App extends React.Component{
	constructor(props){
		super(props)
		this.socket;
		this.connectSocket = this.connectSocket.bind(this)	
		this.disconnectSocket = this.disconnectSocket.bind(this)	
		this.state = {
			title: 'mytitle from app state',
			connectedStatus: false
		}
	}
	
	connectSocket(){
		console.log('client connected to socket it')
		console.log(this.socket.id)
		this.setState({connectedStatus: true})
	}

	disconnectSocket(){
		console.log('client connected to socket it')
		console.log(this.socket.id)
		this.setState({connectedStatus: false})
	}

	componentWillMount(){
		//connect socket server
		this.socket = io('http://localhost:3000')

		//add a listener to the socket for the connect event
		this.socket.on('connect', this.connectSocket);
		this.socket.on('disconnect', this.disconnectSocket);
	}

	render(){
		return (
			<React.Fragment>
				<Header 
					title={this.state.title}
					statusColor={(this.state.connectedStatus == true) ? 'green' : 'red'}
				/>
				<p className="title">Dummy React Component here!</p>
				<p>Mic Check</p>
			</React.Fragment>
		);
	}
}
  
export default App;