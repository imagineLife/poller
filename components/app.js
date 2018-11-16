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
		this.welcome = this.welcome.bind(this)
		this.state = {
			title: '',
			connectedStatus: false
		}
	}
	
	connectSocket(){
		console.log('client connected')
		this.setState({connectedStatus: true})
	}

	disconnectSocket(){
		console.log('client DISconnected')
		this.setState({connectedStatus: false})
	}

	welcome(serverState){
		console.log('welcom on client')
		this.setState({title: serverState.title})
	}

	componentWillMount(){
		//connect socket server
		this.socket = io('http://localhost:3000')

		//add a listener to the socket for the connect event
		this.socket.on('connect', this.connectSocket);
		this.socket.on('disconnect', this.disconnectSocket);
		this.socket.on('welcome', this.welcome)
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