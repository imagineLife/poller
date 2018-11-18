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

				<PollContent showContent={(props.memberStats.memberName)}>
					<h2>Welcome {props.memberStats.memberName}</h2>
				</PollContent>

				<PollContent showContent={!props.memberStats.memberName}>
					<JoinForm emit={props.emit}/>
				</PollContent>

			</PollContent>
		</React.Fragment>
	);
}
  
export default Audience;