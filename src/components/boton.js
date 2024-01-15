import React from 'react';
import '../stylesheets/boton.css';


function Boton(props) {

	const isOperator = value => {
		return isNaN(value) && (value != '.') && (value != '=');
	};

	return (
		<div
		className={`container-button ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
		onClick={() => props.driveClick(props.children)}>
			{props.children}
		</div>
	);
}

export default Boton;