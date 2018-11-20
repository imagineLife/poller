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
		this.updateState = this.updateState.bind(this)
		this.emit = this.emit.bind(this)
		this.notifyClientNewMember = this.notifyClientNewMember.bind(this)
		this.updateAudience = this.updateAudience.bind(this)
		this.startPresentation = this.startPresentation.bind(this)
		this.state = {
			title: '',
			connectedStatus: false,
			memberStats: {},
			audienceMembers: [],
			speaker: '',
		}
	}
	
	connectSocket(){
		console.log('connect Socket Ran!')

		//check if already logged in
		const alreadyLoggedInNote = (sessionStorage.livePollNote) ? JSON.parse(sessionStorage.livePollNote) : null;
		
		//if already logged in member
		if(alreadyLoggedInNote && alreadyLoggedInNote.type === 'audience'){
			console.log('already logged in member!')
			console.log(alreadyLoggedInNote)
			this.emit('joinPoll', alreadyLoggedInNote);
		}

		//if laready logged in speaker
		if(alreadyLoggedInNote && alreadyLoggedInNote.type === 'speaker'){
			console.log('alreadyLoggedInNote')
			console.log(alreadyLoggedInNote)
			this.emit('startPresentation', {title: sessionStorage.title, fullName: alreadyLoggedInNote.memberName})
		}

		this.setState({connectedStatus: true})
	}

	disconnectSocket(){
		console.log('client DISconnected')
		this.setState({connectedStatus: false})
	}

	updateState(serverState){
		console.log('updateState on client')
		this.setState(serverState)
	}

	emit(eventName, data){
		console.log('APP emitting...')
		console.log(eventName)
		console.log(data)
		this.socket.emit(eventName, data);
	}

	notifyClientNewMember(memberData){

		//save details to browser session
		console.log('notifyClientNewMember')
		console.log(memberData)
		memberData.fullName = memberData.name;
		sessionStorage.livePollNote = JSON.stringify(memberData);

		this.setState({
			memberStats: memberData
		})
	}

	updateAudience(aud){
		this.setState({audienceMembers: aud})
	}

	startPresentation(presInfo){

		//if speaker, save presentation title in local storage 
		if(this.state.memberStats.type === 'speaker'){
			sessionStorage.title = presInfo.title;
		}
		this.setState(presInfo)
	}

	componentWillMount(){
		//connect socket server
		this.socket = io('http://localhost:3000')

		//add a listener to the socket for each event
		this.socket.on('connect', this.connectSocket);
		this.socket.on('disconnect', this.disconnectSocket);
		this.socket.on('welcome', this.updateState)
		this.socket.on('notifyClientNewMember', this.notifyClientNewMember)
		this.socket.on('updateAudience',this.updateAudience)
		this.socket.on('startPresentation', this.startPresentation)
		this.socket.on('endPresentation', this.updateState)
	}

	render(){
		return (
			<Router>					
				<div className="switchWrapper">
					<Switch>
				        <Redirect exact from="/" to="/Audience" />
				        <Route exact path="/Audience" render={() => <Audience emit={this.emit} {...this.state} /> } />
				        <Route exact path="/Speaker" render={() => <Speaker emit={this.emit} {...this.state} /> } />
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