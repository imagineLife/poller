import React from "react";
import './index.css'
import Header from '../Header'
import ShowThis from '../ShowThis'
import JoinForm from '../JoinForm'
import UserAnswers from '../UserAnswers'

let Audience = (props) => {
	// console.log('audience props')
	// console.log(props)
	return (
		<React.Fragment>
			<Header {...props}/>
			<ShowThis showContent={props.connectedStatus}>

				<ShowThis showContent={(props.memberStats.memberName)}>
				
					<ShowThis showContent={(!props.curQuestion)}>
						<h2>Welcome {props.memberStats.memberName}</h2>
						<p>{props.audienceMembers.length} folks connected</p>
						<p>Questions coming soon...</p>
					</ShowThis>

					<ShowThis showContent={(props.curQuestion)}>
						<h2>Welcome</h2>
						<h3>{props.curQuestion.q}</h3>
						<UserAnswers 
							curQuestion={props.curQuestion} 
							emit={props.emit} />
					</ShowThis>
					
				</ShowThis>

				<ShowThis showContent={!props.memberStats.memberName}>
					<JoinForm emit={props.emit}/>
				</ShowThis>

			</ShowThis>
		</React.Fragment>
	);
}
  
export default Audience;