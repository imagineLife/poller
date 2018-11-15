import React from "react";
import ReactDOM from "react-dom";
import './index.css'

function Header(props){
	let style={backgroundColor: props.statusColor}
	return (
		<header>
			<h2>{props.title}</h2>
			<span className="connectionDot" style={style}></span>
		</header>
	);
}
  
export default Header;