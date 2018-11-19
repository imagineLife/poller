import React from "react";
import ReactDOM from "react-dom";
import './index.css'

class SpeakerStartForm extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			fullName: '',
			presentationTitle: '',
			formInputs: [
				{
					id: 'fullName',
					txt: 'Full Name',
					placeHolder: 'enter your full name...',
					onCh: this.updateFormVal
				},
				{
					id: 'presTitle',
					txt: 'Presentation Title',
					placeHolder: 'enter the presentaiton name...',
					onCh: this.updateFormVal
				}
			]
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.updateFormVal = this.updateFormVal.bind(this)
	}

	updateFormVal(e){
		let idVal = e.target.id

		if (idVal === 'fullName'){
			this.setState({fullName: e.target.value})
		}

		if (idVal === 'presentationTitle'){
			this.setState({presentationTitle: e.target.value})
		}
	}
	
	handleSubmit(e){
		e.preventDefault();
		console.log('submitted Fn here!')
		console.log(this.state.fullName)
		this.props.emit('startPresentation', {fullName: this.state.fullName, presentationTitle:this.state.presentationTitle})
	}

	render(){
		console.log('Start Pres Form Props')
		console.log(this.props)
		return (
			<form className="speakerStartForm" onSubmit={this.handleSubmit} >
				<label for="fullName" className='inputlabel'>Full Name
					<input 
						id="fullName"
						className='input fullName'
						placeholder="enter your full name..."
						value={this.state.fullName}
                    	onChange={this.updateFormVal}
						required/>
				</label>
				<label for="presentationTitle" className='inputlabel'>Presentation Title
					<input 
						id="presentationTitle"
						className='input presentationTitle'
						placeholder="enter presentation name..."
						value={this.state.presentationTitle}
                    	onChange={this.updateFormVal}
						required/>
				</label>
				<input type="submit" value="Join" />
			</form>
		);
	}
}
  
export default SpeakerStartForm;