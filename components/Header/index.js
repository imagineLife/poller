import React from "react";
import ReactDOM from "react-dom";
import './index.css'

function Header(props){
	// console.log('header props')
	// console.log(props)
	let style={backgroundColor: (props.connectedStatus) ? 'green' : 'red'}
	return (
		<header>
			<h2>{props.title}</h2>
			<span className="connectionDot" style={style}></span>
		</header>
	);
}
  
export default Header;