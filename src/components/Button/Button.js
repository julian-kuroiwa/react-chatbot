import React from 'react';
import classes from './Button.module.css';

const button = props => (
	<button className={classes.Button} type={props.type}>
		{props.children}
	</button>
);

export default button;
