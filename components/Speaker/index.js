import React from "react";
import './index.css'
import SpeakerStartForm from '../SpeakerStartForm'
import Header from '../Header'
import ShowThis from '../ShowThis'
import AttendanceNote from '../AttendanceNote'
import QuestionList from '../QuestionList'

let Speaker = (props) => {
	console.log("speaker props")
	console.log(props)
	return (
		
		<React.Fragment>
			<Header title={props.title} connectedStatus={props.connectedStatus}/>
			<ShowThis showContent={(props.connectedStatus == true)}>

				<ShowThis showContent={(props.memberStats && props.memberStats.type == 'speaker' && props.memberStats.memberName)}>
					<p>Questions</p>
					<QuestionList questions={props.questions}/>
					<AttendanceNote audienceMembers={props.audienceMembers}/>
				</ShowThis>

				<ShowThis showContent={(!props.memberStats.memberName)}>
					<p>Start the presentaiton</p>
					<SpeakerStartForm emit={props.emit} />
				</ShowThis>

			</ShowThis>
		</React.Fragment>

	);
}
  
export default Speaker;