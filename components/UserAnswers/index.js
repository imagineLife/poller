import React from "react";
import './index.css'

class UserAnswers extends React.Component{
	/*
		Can add the ShowThis, for conditional button visibility:
			when no answer, 
				show choice buttons 
			when question is answered (via this.state.answer from vid), 
				showthis No buttons
						text 'you answered ${answer option}'

	*/

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
		let workingOpts = Object.keys(this.props.curQuestion)
		workingOpts.shift();
		this.setState({answerOpts: workingOpts})

		/*
			CAN add to state here the sessionStorage-saved answer
			this seems interesting & prob needs more work
			than just loading answer from ses.stor
		*/

	}

	selectAnswer(opt, e){
		console.log('USERANSWER selectAnswer')

		//just in case user refreshes mid-question
		// sessionStorage.selectedChoice = opt;

		this.props.emit('memberSelectsAnswer', opt)
		this.props.setButtonsDisabled(true)

		//can add question/anwer to session storage for page-refreshing help
	}

	render(){
		let theseWorkingOpts = this.state.answerOpts;
		let dis = (this.state.selectedChoice !== undefined) ? true : false;
		let selectableAnswers = theseWorkingOpts.map((opt, ind) => {
			return <button 
				key={opt} 
				onClick={(e) => this.selectAnswer(opt, e)} 
				disabled={this.props.buttonsDisabled}>
				{opt}: {this.props.curQuestion[opt]}
			</button> 
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