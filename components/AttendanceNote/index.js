import React from "react";
import './index.css'

let AttendanceNote = (props) => {
	console.log('atttendnce note props')
	console.log(props)
	let attendanceRows = (props.audienceMembers && props.audienceMembers.length > 0) ? 
			props.audienceMembers.map(mem => {
				return (
					<tr key={mem.id}>
						<td>{mem.memberName}</td>
						<td>{mem.id}</td>
					</tr>
					)
			}) : null;
	return (
		<React.Fragment>
			<h1>Attendees: {props.audienceMembers.length}</h1>
			<table>
				<thead>
					<tr>
						<th>Member</th>
						<th>SocketID</th>
					</tr>
				</thead>
				<tbody>
					{attendanceRows}
				</tbody>
			</table>
		</React.Fragment>	
	);
}
  
export default AttendanceNote;