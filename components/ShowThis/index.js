import React from "react";
import './index.css'

export default function ShowThis(props){
	// console.log('ShowThis props')
	// console.log(props)
	return (props.showContent ? <div className="showThisWrapper">{props.children}</div> : null);
} 