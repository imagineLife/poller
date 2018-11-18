import React from "react";
import './index.css'
import PollContent from '../PollContent'
import JoinForm from '../JoinForm'

let Audience = (props) => {
	console.log('audience props')
	console.log(props)
	return (
		<React.Fragment>
			<h1>{props.title}</h1>
			<PollContent showContent={props.connectedStatus}>
				<JoinForm />
			</PollContent>
		</React.Fragment>
	);
}
  
export default Audience;