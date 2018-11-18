import React from "react";
import ReactDOM from "react-dom";
import '../public/index.css'
import io from 'socket.io-client'
import Header from './Header'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import Audience from './Audience';
import Speaker from './Speaker';
import Board from './Board';

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
			<Router>					
				<div className="switchWrapper">
					<Switch>
				        <Redirect exact from="/" to="/Audience" />
				        <Route exact path="/Audience" component={Audience} />
				        <Route exact path="/Speaker" component={Speaker} />
				        <Route exact path="/Board" component={Board} />
				        <Route component={Audience} />
				    </Switch>
				</div>
			</Router>
		);
	}
}
  
export default App;