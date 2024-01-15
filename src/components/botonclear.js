import React from 'react';
import '../stylesheets/boton.css';


const BotonClear = (props) => (
	<div className='clear-button'
	onClick={props.driveClear}>
		{props.children}
	</div>
);

export default BotonClear