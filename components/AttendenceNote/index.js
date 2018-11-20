import React from "react";
import './index.css'

let AttendanceNote = (props) => {
	let attendanceRows = props.audience.map(mem => {
		return (
			<tr key={mem.id}>
				<td>{mem.fullName}</td>
				<td>{mem.id}</td>
			</tr>
			)
	})
	return (
		<React.Fragment>
			<h1>Attendees: {props.audience.length}</h1>
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