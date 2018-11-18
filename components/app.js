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
		this.emit = this.emit.bind(this)
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

	emit(eventName, data){
		console.log('app emitting...')
		console.log(eventName)
		console.log(data)
		this.socket.emit(eventName, data);
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
				        <Route exact path="/Audience" render={() => <Audience emit={this.emit} {...this.state} /> } />
				        <Route exact path="/Speaker" render={() => <Speaker headerTitle={this.state.title} connectedStatus={this.state.connectedStatus} /> } />
				        <Route exact path="/Board" render={() => <Board headerTitle={this.state.title} connectedStatus={this.state.connectedStatus} /> } />
				        <Redirect from="/*" to="/Audience" />
				        <Route component={Audience} />
				    </Switch>
				</div>
			</Router>
		);
	}
}
  
export default App;