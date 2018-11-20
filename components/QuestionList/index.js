import React from "react";
import './index.css'

class QuestionList extends React.Component{
	constructor(props){
		super(props)

		this.selectQuestion = this.selectQuestion.bind(this)
	}

	selectQuestion(q){
		this.props.emit('speakerSelectsQuestion',q)
	}

	render(){
		console.log("QuestionList props")
		console.log(this.props)
		
		let questions = this.props.questions.map((q,i) => {
			return(
				<div key={i} className="singleQuestion">
					<span onClick={() => this.selectQuestion(q)}>{q.q}</span>
				</div>
			)
		})

		return (
			<div className="questions">
				<h2>Questions</h2>
				{questions}
			</div>
		);
	}
}
  
export default QuestionList;