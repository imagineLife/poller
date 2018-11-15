import React from "react";
import ReactDOM from "react-dom";
import '../public/index.css'
import io from 'socket.io-client'

class App extends React.Component{
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