import React from "react";
import './index.css'
import SpeakerStartForm from '../SpeakerStartForm'
import Header from '../Header'
import ShowThis from '../ShowThis'

let Speaker = (props) => {
	console.log("speaker props")
	console.log(props)
	return (
		
		<React.Fragment>
			<Header title={props.title} connectedStatus={props.connectedStatus}/>
			<ShowThis showContent={(props.connectedStatus == true)}>

				<ShowThis showContent={(props.memberStats && props.memberStats.type == 'speaker' && props.memberStats.memberName)}>
					<p>Questions</p>
					<p>Attendance</p>
				</ShowThis>

				<ShowThis showContent={(!props.memberStats)}>
					<p>Start the presentaiton</p>
					<SpeakerStartForm emit={props.emit} />
				</ShowThis>

			</ShowThis>
		</React.Fragment>

	);
}
  
export default Speaker;