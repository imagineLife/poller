import React from "react";
import './index.css'

function UserAnswers(props){
	console.log('UserAnswers props')
	console.log(props)
	let answerOpts = [
		{ a: props.curQuestion.a},
		{ b: props.curQuestion.b},
		{ c: props.curQuestion.c},
		{ d: props.curQuestion.d},
	];

	let selectableAnswers = answerOpts.map((opt, ind) => {
		let optKey = Object.keys(opt);
		return <p key={ind}>{optKey}: {opt[optKey]}</p> 
	});

	return (
		<div className='curQuestions'>
			<div className="questionAnswerOptions">
				{selectableAnswers}
			</div>
		</div>
	);
}
  
export default UserAnswers;