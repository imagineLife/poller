import React from "react";
import './index.css'

class UserAnswers extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			answerOpts : []
		}

		this.selectAnswer = this.selectAnswer.bind(this)
		this.captureAnswerOpts = this.captureAnswerOpts.bind(this)
	}

	componentDidMount(){
		console.log('UserAnswers CDM')
		this.captureAnswerOpts();
	}

	captureAnswerOpts(){
		console.log('captureAnswerOpts')
		console.log(this.props.curQuestion)
		let workingOpts = this.state.answerOpts;
		 workingOpts = Object.keys(this.props.curQuestion)
		workingOpts.shift();
		console.log('workingOpts')
		console.log(workingOpts)
		this.setState({answerOpts: workingOpts})

	}

	selectAnswer(e){
		console.log('emit answer to server')
		console.log('e')
		console.log(e)
		//just in case user refreshes mid-question
		sessionStorage.selectedChoice = selectedChoice;

		this.props.emit('memberSelectsAnswer', selectedChoice)
	}

	render(){
		let theseWorkingOpts = this.state.answerOpts;
		let selectableAnswers = theseWorkingOpts.map((opt, ind) => {
			console.log('mapping theseWorkingOpts')
			console.log(opt)
			return <button key={opt} onClick={(e) => this.selectAnswer(e)}>{opt}: {this.props.curQuestion[opt]}</button> 
		});
	
		return (
			<div className='curQuestions'>
				<div className="questionAnswerOptions">
					{selectableAnswers}
				</div>
			</div>
		);
	}
}
  
export default UserAnswers;