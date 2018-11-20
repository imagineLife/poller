import React from "react";
import './index.css'

class QuestionList extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		console.log("QuestionList props")
		console.log(this.props)
		
		let questions = this.props.questions.map((q,i) => {
			return(
				<div key={i} className="singleQuestion">
					<span>{q.q}</span>
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