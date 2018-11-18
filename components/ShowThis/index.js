import React from "react";
import './index.css'

let ShowThis = (props) => {
	console.log('ShowThis props')
	console.log(props)
	return (props.showContent ? <div className="showThisWrapper">{props.children}</div> : null);
}
  
export default ShowThis; 