import React from "react";
import './index.css'
import Header from '../Header'
import ShowThis from '../ShowThis'
import JoinForm from '../JoinForm'

let Audience = (props) => {
	console.log('audience props')
	console.log(props)
	return (
		<React.Fragment>
			<Header title={props.title} connectedStatus={props.connectedStatus}/>
			<ShowThis showContent={props.connectedStatus}>

				<ShowThis showContent={(props.memberStats.memberName)}>
					<h2>Welcome {props.memberStats.memberName}</h2>
					<p>{props.audienceMembers.length} folks connected</p>
				</ShowThis>

				<ShowThis showContent={!props.memberStats.memberName}>
					<JoinForm emit={props.emit}/>
				</ShowThis>

			</ShowThis>
		</React.Fragment>
	);
}
  
export default Audience;