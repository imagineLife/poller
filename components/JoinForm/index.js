import React from "react";
import ReactDOM from "react-dom";
import './index.css'

class JoinForm extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			fullName: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.updateFormVal = this.updateFormVal.bind(this)
	}

	updateFormVal(e){
		let idVal = e.target.id

		if (idVal === 'fullName'){
			this.setState({fullName: e.target.value})
		}
	}
	
	handleSubmit(e){
		e.preventDefault();
		console.log('submitted Fn here!')
		console.log(this.state.fullName)
		this.props.emit('joinPoll', {fullName: this.state.fullName})
	}

	render(){
		// console.log('Join Form Props')
		// console.log(this.props)
		return (
			<form className="joinForm" onSubmit={this.handleSubmit} >
				<label for="fullName" className='inputlabel'>Full Name
					<input 
						id="fullName"
						className='input fullName'
						placeholder="enter your full name..."
						value={this.state.fullName}
                    	onChange={this.updateFormVal}
						required/>
					<input type="submit" value="Join" />
				</label>
			</form>
		);
	}
}
  
export default JoinForm;