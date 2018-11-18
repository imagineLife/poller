import React from "react";
import './index.css'

let PollContent = (props) => {
	console.log('pollContent props')
	console.log(props)
	return (props.showContent ? <div className="pollContentWrapper">{props.children}</div> : null);
}
  
export default PollContent; 