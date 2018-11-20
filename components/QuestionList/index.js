import React from "react";
import './index.css'

let QuestionList = (props) => {
	console.log("QuestionList props")
	console.log(props)
	
	let questions = props.questions.map((q,i) => {
		return(
			<div key={i} className="singleQuestion">
				<span>{q.q}</span>
				<span>{q.a}</span>
				<span>{q.b}</span>
				<span>{q.c}</span>
				<span>{q.d}</span>
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
  
export default QuestionList;