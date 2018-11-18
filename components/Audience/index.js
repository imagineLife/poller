import React from "react";
import './index.css'
import Header from '../Header'
import PollContent from '../PollContent'
import JoinForm from '../JoinForm'

let Audience = (props) => {
	console.log('audience props')
	console.log(props)
	return (
		<React.Fragment>
			<Header title={props.title} connectedStatus={props.connectedStatus}/>
			<PollContent showContent={props.connectedStatus}>
				<JoinForm />
			</PollContent>
		</React.Fragment>
	);
}
  
export default Audience;