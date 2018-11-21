import React from "react";
import './index.css'

class UserAnswers extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			answerOpts : [],
			selectedChoice: undefined
		}

		this.selectAnswer = this.selectAnswer.bind(this)
		this.captureAnswerOptsFromServer = this.captureAnswerOptsFromServer.bind(this)
	}

	componentDidMount(){
		console.log('UserAnswers CDM')
		this.captureAnswerOptsFromServer();
	}

	captureAnswerOptsFromServer(){
		console.log('captureAnswerOptsFromServer')
		console.log(this.props.curQuestion)
		let workingOpts = this.state.answerOpts;
		 workingOpts = Object.keys(this.props.curQuestion)
		workingOpts.shift();
		this.setState({answerOpts: workingOpts})

	}

	selectAnswer(opt, e){
		console.log('USERANSWER selectAnswer')

		//just in case user refreshes mid-question
		// sessionStorage.selectedChoice = opt;

		this.props.emit('memberSelectsAnswer', opt)
	}

	render(){
		let theseWorkingOpts = this.state.answerOpts;
		let selectableAnswers = theseWorkingOpts.map((opt, ind) => {
			return <button key={opt} onClick={(e) => this.selectAnswer(opt, e)}>{opt}: {this.props.curQuestion[opt]}</button> 
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