import React from "react";
import './index.css'
import PollContent from '../PollContent'

let Audience = (props) => {
	console.log('audience props')
	console.log(props)
	return (
		<PollContent showContent={props.connectedStatus}>
			<h1>Showing PollContent child</h1>
		</PollContent>
	);
}
  
export default Audience;